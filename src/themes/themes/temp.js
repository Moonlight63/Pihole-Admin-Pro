export class Theme {
  private theme;
  constructor(options: {
    name: string
    selectors: [string]
    theme: {
      colors: {
        primary: string
        secondary: string
        accent: string
        neutral: string
        info: string
        success: string
        warning: string
        error: string
        ghost: string

        'primary-hocus': string
        'secondary-hocus': string
        'accent-hocus': string
        'neutral-hocus': string
        'info-hocus': string
        'success-hocus': string
        'warning-hocus': string
        'error-hocus': string
        'ghost-hocus': string
      }
      backgroundColor: {
        main: string
        card: string
        menu: string
        form: string
        'menu-item': string
        'menu-subitem': string
        'menu-item-active': string
        'menu-subitem-active': string
        'menu-item-hocus': string
        'menu-subitem-hocus': string
      },
      textColor: {
        'on-main': string
        'on-main-muted': string
        'on-menu': string
        'on-menu-active': string
        'on-menu-muted': string

        'on-primary': string
        'on-secondary': string
        'on-accent': string
        'on-neutral': string
        'on-info': string
        'on-success': string
        'on-warning': string
        'on-error': string

        'on-primary-hocus': string
        'on-secondary-hocus': string
        'on-accent-hocus': string
        'on-neutral-hocus': string
        'on-info-hocus': string
        'on-success-hocus': string
        'on-warning-hocus': string
        'on-error-hocus': string
      }
      placeholderColor: {
        form: string
      },
      borderRadius: {
        card: string
        button: string
        form: string
      },
      borderWidth: {
        card: string
        button: string
        menu: string
        form: string
        'button-outline': string
      },
      borderColor: {
        card: string
        menu: string
        divider: string
        form: string
      }
    }
  }) {
    this.theme = options
  }
  get() {
    return this.theme
  }
}