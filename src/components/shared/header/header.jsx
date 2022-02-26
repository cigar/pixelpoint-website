import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import Burger from 'components/shared/burger';
import Link from 'components/shared/link';
import Logo from 'images/logo.inline.svg';

import ServicesWebDesignIcon from './images/services-web-design.inline.svg';
import ServicesWebDevelopmentIcon from './images/services-web-development.inline.svg';

const links = [
  {
    text: 'Services',
    items: [
      {
        icon: ServicesWebDesignIcon,
        text: 'Web design',
        description:
          'Get a stunning-looking website made by in-house team of motion, graphic, and web designers.',
        linkText: 'Read more',
        to: '/services/web-design',
      },
      {
        icon: ServicesWebDevelopmentIcon,
        text: 'Web development',
        description:
          'Have a JAMStack powered web platform built with React, 3rd parties & integrations at your disposal',
        linkText: 'Read more',
        to: '/services/web-development',
      },
    ],
  },
  {
    text: 'Case studies',
    to: '/case-studies',
  },
  {
    text: 'Blog',
    to: '/blog',
  },
];

const Header = forwardRef(({ isMobileMenuOpen, onBurgerClick }, ref) => (
  <header className="safe-paddings absolute top-0 left-0 right-0 z-50 w-full" ref={ref}>
    <div className="container-lg flex h-[88px] items-center justify-between lg:h-20 sm:h-16">
      <Link to="/">
        <span className="sr-only">Pixel Point</span>
        <Logo
          className={clsx(
            'h-9 transition-all duration-200 sm:h-8',
            isMobileMenuOpen && 'md:invert'
          )}
          aria-hidden
        />
      </Link>
      <nav className="flex items-center">
        <ul className="flex items-center space-x-10 text-[0px] md:hidden">
          {links.map(({ text, to, items }, index) => (
            <li
              className={clsx(
                items?.length > 0 &&
                  'group relative cursor-pointer pr-2.5 after:absolute after:top-2 after:right-0 after:h-0 after:w-0 after:border-[3px] after:border-b-0 after:border-t-white after:transition-colors after:duration-200 after:hover:border-t-red'
              )}
              key={index}
            >
              <Link className="group-hover:text-red" to={to} size="sm" theme="white">
                {text}
              </Link>

              {items?.length > 0 && (
                <div className="invisible absolute -left-24 bottom-0 w-[500px] translate-y-full pt-6 text-[0px] opacity-0 transition-[opacity,visibility] duration-200 group-hover:visible group-hover:opacity-100">
                  <ul
                    className="rounded-2xl bg-white p-6 pb-7"
                    style={{
                      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05), 0px 6px 20px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    {items.map(({ icon: Icon, text, description, linkText, to }, index) => (
                      <li
                        className={clsx(index !== 0 && 'mt-7 border-t border-t-gray-4 pt-7')}
                        key={index}
                      >
                        <Link className="flex space-x-5" to={to}>
                          <Icon className="h-14 shrink-0" />
                          <div>
                            <span className="text-2xl font-normal leading-snug">{text}</span>
                            <p className="mt-2.5 text-base">{description}</p>
                            <Link className="mt-4" size="sm" theme="arrow-red">
                              {linkText}
                            </Link>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}

          <li className="!ml-6 border-l border-l-gray-8 pl-6">
            <Link to="mailto:info@pixelpoint.io" size="sm" theme="underline-red">
              info@pixelpoint.io
            </Link>
          </li>
        </ul>

        <Burger className="hidden md:block" isToggled={isMobileMenuOpen} onClick={onBurgerClick} />
      </nav>
    </div>
  </header>
));

Header.propTypes = {
  isMobileMenuOpen: PropTypes.bool,
  onBurgerClick: PropTypes.func.isRequired,
};

Header.defaultProps = {
  isMobileMenuOpen: false,
};

export default Header;
