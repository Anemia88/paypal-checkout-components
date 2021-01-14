/* @flow */
/** @jsx node */

import { FUNDING } from '@paypal/sdk-constants/src';
import { node, Fragment } from 'jsx-pragmatic/src';
import { PPLogo, LOGO_COLOR } from '@paypal/sdk-logos/src';

import { BUTTON_COLOR, BUTTON_LAYOUT, DEFAULT } from '../../constants';
import { DEFAULT_FUNDING_CONFIG, type FundingSourceConfig } from '../common';
import { Text, Space } from '../../ui/text';

export function getPaylaterConfig() : FundingSourceConfig {
    return {
        ...DEFAULT_FUNDING_CONFIG,

        layouts: [
            BUTTON_LAYOUT.HORIZONTAL,
            BUTTON_LAYOUT.VERTICAL
        ],

        Label: ({ logo }) => logo,

        Logo: ({ logoColor /* , fundingEligibility */ }) => {
            // const paylaterEligibility = fundingEligibility.paylater;

            // const products = (paylaterEligibility && paylaterEligibility.products && paylaterEligibility.products) || {};

            const text = <Text>Pay Later</Text>;

            // if (products.flex && products.flex.eligible && env !== ENV.LOCAL && env !== ENV.STAGE && env !== ENV.SANDBOX) {
            //     text = (
            //         <Fragment>
            //             <Text optional>PayPal </Text>
            //             <Text>Flex</Text>
            //         </Fragment>
            //     );
            // } else {
            //     text = <Text>Pay Later</Text>;
            // }

            return (
                <Fragment>
                    <PPLogo optional logoColor={ logoColor } />
                    <Space />
                    { text }
                </Fragment>
            );
        },
    
        colors: [
            BUTTON_COLOR.WHITE,
            BUTTON_COLOR.BLACK,
            BUTTON_COLOR.GOLD,
            BUTTON_COLOR.BLUE,
            BUTTON_COLOR.SILVER
        ],

        secondaryColors: {
            [ DEFAULT ]:             BUTTON_COLOR.WHITE,
            [ BUTTON_COLOR.GOLD ]:   BUTTON_COLOR.GOLD,
            [ BUTTON_COLOR.BLUE ]:   BUTTON_COLOR.BLUE,
            [ BUTTON_COLOR.SILVER ]: BUTTON_COLOR.SILVER,
            [ BUTTON_COLOR.BLACK ]:  BUTTON_COLOR.BLACK,
            [ BUTTON_COLOR.WHITE ]:  BUTTON_COLOR.WHITE
        },

        logoColors: {
            [BUTTON_COLOR.GOLD]:   LOGO_COLOR.BLUE,
            [BUTTON_COLOR.SILVER]: LOGO_COLOR.BLUE,
            [BUTTON_COLOR.BLUE]:   LOGO_COLOR.WHITE,
            [BUTTON_COLOR.BLACK]:  LOGO_COLOR.WHITE,
            [BUTTON_COLOR.WHITE]:  LOGO_COLOR.BLUE
        },
        
        labelText: `${ FUNDING.PAYPAL } ${ FUNDING.PAYLATER }`
    };
}
