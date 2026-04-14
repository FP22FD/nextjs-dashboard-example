import localFont from 'next/font/local';

export const poppins = localFont({
    src: [
        { path: '../../public/fonts/poppins/Poppins-Regular.ttf', weight: '400', style: 'normal' },
        { path: '../../public/fonts/poppins/Poppins-Italic.ttf', weight: '400', style: 'italic' },
        { path: '../../public/fonts/poppins/Poppins-Medium.ttf', weight: '500', style: 'normal' },
        { path: '../../public/fonts/poppins/Poppins-SemiBold.ttf', weight: '600', style: 'normal' },
        { path: '../../public/fonts/poppins/Poppins-Bold.ttf', weight: '700', style: 'normal' },
    ],
    variable: '--font-sans',
    display: 'swap',
});

export const playfair = localFont({
    src: [
        {
            path: '../../public/fonts/PlayfairDisplay/PlayfairDisplay-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/PlayfairDisplay/PlayfairDisplay-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/fonts/PlayfairDisplay/PlayfairDisplay-SemiBold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../public/fonts/PlayfairDisplay/PlayfairDisplay-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/fonts/PlayfairDisplay/PlayfairDisplay-ExtraBold.ttf',
            weight: '800',
            style: 'normal',
        },
    ],
    variable: '--font-playfair',
    display: 'swap',
});