import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react';

function debounce(fn, ms, ...args) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, args);
    }, ms);
  };
}

function StoreWindowSize(props) {
  const desktopWidth = 992;
  const tabletWidth = 768;
  const mobileWidth = 640;
  const { UserInterfaceStore } = props;
  React.useEffect(() => {
    const debouncedHandleResize = debounce(() => {
      UserInterfaceStore.setIsDesktop((window.innerWidth >= desktopWidth));
      UserInterfaceStore.setIsTablet(
        (window.innerWidth >= tabletWidth && window.innerWidth < desktopWidth),
      );
      UserInterfaceStore.setIsMobile((window.innerWidth < mobileWidth));
      UserInterfaceStore.resetBasedOnDevice();
    }, 100);

    window.addEventListener('resize', debouncedHandleResize);
    UserInterfaceStore.setIsDesktop((window.innerWidth >= desktopWidth));
    UserInterfaceStore.setIsTablet(
      (window.innerWidth >= tabletWidth && window.innerWidth < desktopWidth),
    );
    UserInterfaceStore.setIsMobile((window.innerWidth < mobileWidth));
    UserInterfaceStore.resetBasedOnDevice();

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  });
  return (
    <></>
  );
}

StoreWindowSize.propTypes = {
  UserInterfaceStore: PropTypes.observableObject.isRequired,
};

export default inject('UserInterfaceStore')(observer(StoreWindowSize));
