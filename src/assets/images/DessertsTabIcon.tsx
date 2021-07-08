import * as React from 'react';
import Svg, { SvgProps, Circle, Path } from 'react-native-svg';


const DessertsTabIcon = (props: SvgProps) => (
    <Svg
        viewBox="0 0 511.999 511.999"
        width={30}
        height={30}
        fill={props.color || 'grey'}
        {...props}
    >
        {/* eslint-disable-next-line max-len */}
        <Path d="M433.326 313.12a10.2 10.2 0 00-7.999-3.871h-25.914l5.106-9.353c8.039-14.727 7.726-32.132-.835-46.561-8.563-14.429-23.691-23.043-40.468-23.043h-5.918c1.748-10.691-.259-21.758-6.026-31.476-8.562-14.428-23.691-23.042-40.468-23.042h-11.926c7.479-9.316 11.969-21.131 11.969-33.978 0-26.48-19.031-48.588-44.131-53.396.715-15.547 5.846-53.71 38.274-68.971 5.097-2.399 7.284-8.474 4.885-13.571-2.398-5.096-8.474-7.285-13.571-4.886-43.34 20.395-49.402 68.338-50.046 87.421-25.118 4.793-44.166 26.908-44.166 53.402 0 12.849 4.49 24.663 11.969 33.978h-12.866c-16.778 0-31.906 8.614-40.468 23.042-5.767 9.718-7.774 20.785-6.026 31.476h-5.918c-16.778 0-31.905 8.614-40.468 23.043-8.562 14.429-8.874 31.835-.835 46.561l5.106 9.353H86.674a10.202 10.202 0 00-9.926 12.545l43.102 182.353a10.198 10.198 0 009.925 7.853h252.45c4.729 0 8.838-3.251 9.925-7.853l43.102-182.353a10.198 10.198 0 00-1.926-8.673zM256.47 107.817c18.736 0 33.978 15.243 33.978 33.978s-15.243 33.978-33.978 33.978c-18.736 0-33.978-15.243-33.978-33.978s15.242-33.978 33.978-33.978zm-78.201 101.409c4.851-8.174 13.421-13.054 22.927-13.054h109.609c7.688 0 14.762 3.195 19.754 8.741H278.09c-5.632 0-10.199 4.566-10.199 10.199s4.567 10.199 10.199 10.199h59.284a26.397 26.397 0 01-.959 4.98H175.587c-2.075-7.014-1.17-14.572 2.682-21.065zm-52.41 54.518c4.851-8.175 13.42-13.054 22.926-13.054h214.431c9.505 0 18.075 4.88 22.926 13.054 4.851 8.174 5.028 18.035.474 26.377l-10.441 19.126H135.826l-6.31-11.56h64.917c5.632 0 10.199-4.566 10.199-10.199s-4.567-10.199-10.199-10.199h-72.331c.009-4.671 1.257-9.332 3.757-13.545zm11.986 227.857l-38.28-161.954h86.352l13.929 161.954h-62.001zm153.837 0h-71.364l-13.929-161.954h99.222l-13.929 161.954zm82.474 0h-62.001l13.929-161.954h86.351l-38.279 161.954z" />
        {/* eslint-disable-next-line max-len */}
        <Path d="M235.791 277.29h-5.64c-5.632 0-10.199 4.566-10.199 10.199s4.567 10.199 10.199 10.199h5.64c5.632 0 10.199-4.566 10.199-10.199s-4.567-10.199-10.199-10.199z" />
    </Svg>
);

export default React.memo(DessertsTabIcon);
