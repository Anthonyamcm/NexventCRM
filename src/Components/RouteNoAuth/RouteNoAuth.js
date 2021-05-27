import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const RouteNoAuth = (props) => {
    const {
        layout: Layout,
        component: Component,
        provider: Provider,
        ...rest
    } = props;

    return (
        <Route
            {...rest}
            render={(matchProps) => (
                <Layout>
                    {Provider ? (
                        <Provider>
                            <Component {...matchProps} />
                        </Provider>
                    ) : (
                        <Component {...matchProps} />
                    )}
                </Layout>
            )}
        />
    );
};

export default RouteNoAuth;

RouteNoAuth.propTypes = {
    component: PropTypes.any.isRequired,
    layout: PropTypes.any.isRequired,
    path: PropTypes.string,
    provider: PropTypes.any,
};
