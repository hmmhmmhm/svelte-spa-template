/**
 * @description
 * Central Resources Path Manager
 *
 * Parcel-bundler cannot use static-resource
 * path information as dynamic import.
 *
 * (If used like that, numerous path errors will occur.)
 *
 * Therefore, there must be a central
 * path manager with route information.
 */
export const Resources = {
    testImage: require('./images/test-image.png'),
}

export default Resources
