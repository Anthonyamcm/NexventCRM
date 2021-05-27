import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AuthContext } from '../../Providers/AuthProvider';

const RouteWithAuth = (props) => {
    const {
        layout: Layout,
        component: Component,
        provider: Provider,
        ...rest
    } = props;
    const { currentUser } = useContext(AuthContext);

    return (
        <Route
            {...rest}
            render={(matchProps) =>
                currentUser ? (
                    <Layout>
                        {Provider ? (
                            <Provider>
                                <Component {...matchProps} />
                            </Provider>
                        ) : (
                            <Component {...matchProps} />
                        )}
                    </Layout>
                ) : (
                    <Redirect to='/login' />
                )
            }
        />
    );
};

export default RouteWithAuth;

RouteWithAuth.propTypes = {
    component: PropTypes.any.isRequired,
    layout: PropTypes.any.isRequired,
    path: PropTypes.string,
    provider: PropTypes.any,
};
