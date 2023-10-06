import { COLOR } from './Color';

export const SHADOW = {
  CONTENTBOX_REVERSE:
    '0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.1), inset 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, 0.12), inset -0.1rem -0.1rem 0.2rem rgba(0, 0, 0, 0.2);',
  CONTENTBOX_MD:
    '0.1rem 0.1rem 0.5rem rgba(0, 0, 0, 0.2), 2rem 2rem 3rem -1.5rem rgba(0, 0, 0, 0.15), inset 0.8rem 0.8rem 1rem -1rem rgba(0, 0, 0, 0.15);',
  CONTENTBOX_LG:
    '0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.1), inset 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, 0.12);',
  CONTENTBOX_XLG:
    '0.4rem 0.4rem 2.4rem rgba(0, 0, 0, 0.1), inset 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, 0.12);',
  QUESTION: '-0.15rem 0.15rem 0 0 rgba(0, 0, 0, 0.5);',

  BUTTON:
    'inset 0.4rem 0.4rem 0.6rem -0.4rem rgba(230, 230, 230, 0.3), inset -0.4rem -0.4rem 0.8rem -0.5rem rgba(0, 0, 0, 0.3);',
  BUTTON_NAVY:
    'inset 0.4rem 0.4rem 0.6rem -0.4rem rgba(255, 255, 255, 0.3), inset -0.4rem -0.4rem 0.8rem -0.2rem rgba(0, 0, 0, 0.3);',
  BUTTON_DISABLED:
    'rgba(255, 255, 255, 0.3) 1rem 0.8rem 5rem 4rem inset, rgba(0, 0, 0, 0.3) 0.2rem 0.2rem 0.4rem -0.2rem inset, rgba(255, 255, 255, 0.3) -0.1rem -0.2rem 0.6rem 0rem inset',

  RANKING_TABLE: `0.5rem 0.5rem 1.5rem ${COLOR.GRAY_100}, -0.5rem -0.5rem 1.5rem ${COLOR.WHITE};`,
};
