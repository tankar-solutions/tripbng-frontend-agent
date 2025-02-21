'use client'

import React from 'react';
import { LoaderCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Button({
    children,
    className,
    onClick = () => { },
    disabled = false,
    loading = false,
    size = 'small',
    color = 'primary',
    ...rest
}) {
    const baseStyle = 'transition-all ease-in-out duration-150';
    const sizeStyles = {
        small: 'px-6 py-2 text-xs',
        medium: 'px-4 py-2 text-sm',
        large: 'px-6 py-3 text-sm',
    };
    const colorStyles = {
        primary: 'bg-yellow text-white rounded-full',
        secondary: 'bg-gradient-to-r from-[#125C9C] to-[#47AAFF] text-white rounded-full',
        success: 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-500',
        danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
        outline_black: 'border-2 rounded-full border-black text-black',
        outline_yellow: 'border-2 rounded-full border-yellow text-black'
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled || loading}
            className={cn(
                baseStyle,
                sizeStyles[size],
                colorStyles[color],
                { 'opacity-50 flex items-center gap-3 cursor-not-allowed': disabled || loading },
                className,
            )}
            {...rest}
        >
            {loading && (
                <LoaderCircle className="animate-spin h-4 w-4 text-white" />
            )}
            {children}
        </button>
    );
}
