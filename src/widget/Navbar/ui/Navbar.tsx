import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwither';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <nav className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.PRIMARY} to={'/'}>
                    Главная
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
                    О сайте
                </AppLink>
            </div>
        </nav>
    );
};