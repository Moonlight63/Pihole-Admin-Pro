export type ThemeType = {
  colors?: {
    primary?: string
    secondary?: string
    accent?: string
    neutral?: string
    'base-100'?: string
    'base-200'?: string
    'base-300'?: string
    info?: string
    success?: string
    warning?: string
    error?: string
    'primary-focus'?: string
    'secondary-focus'?: string
    'accent-focus'?: string
    'neutral-focus'?: string
    'info-focus'?: string
    'success-focus'?: string
    'warning-focus'?: string
    'error-focus'?: string
    'primary-hover'?: string
    'secondary-hover'?: string
    'accent-hover'?: string
    'neutral-hover'?: string
    'info-hover'?: string
    'success-hover'?: string
    'warning-hover'?: string
    'error-hover'?: string
    'primary-content'?: string
    'secondary-content'?: string
    'accent-content'?: string
    'neutral-content'?: string
    'base-content'?: string
    'base-content-muted'?: string
    'info-content'?: string
    'success-content'?: string
    'warning-content'?: string
    'error-content'?: string
  }
}

export const extend = (
  extending: ThemeType,
  newTheme: ThemeType
): ThemeType => {
  return { ...extending, ...newTheme }
}
