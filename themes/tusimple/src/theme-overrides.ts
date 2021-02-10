import { composite } from 'seemly'
import type { GlobalThemeOverrides } from 'naive-ui'
import { commonLight } from 'naive-ui'
import vars from './vars'

const inputColorDisabled = '#EBEDF0'

// naive.styles.light.BaseSuffix.override({
//   iconSize: '24px',
//   arrowSize: '13px',
//   arrowBorderWidth: '2px',
//   crossColor: commonLight.closeColor
// })
// naive.styles.light.InputGroupLabel.override({
//   boxShadow: 'none'
// })
// naive.styles.light.InputNumber.override({
//   boxShadow: 'none',
//   borderColor: 'none',
//   borderColorHover: commonLight.primaryColor,
//   buttonTextColor: 'rgba(0, 0, 0, .6)',
//   buttonTextColorHover: commonLight.primaryColor,
//   widthSmall: '140px',
//   widthMedium: '140px',
//   widthLarge: '140px',
//   heightMedium: '32px',
//   fontSizeMedium: '16px',
//   buttonWidthSmall: '28px',
//   buttonWidthMedium: '32px',
//   buttonWidthLarge: '40px',
//   buttonFontSizeSmall: '16px',
//   buttonFontSizeMedium: '24px',
//   buttonFontSizeLarge: '24px'
// })

function createHoverColor (color: string, overlayAlpha: number = 0.15): string {
  return composite(color, [255, 255, 255, overlayAlpha])
}

function createPressedColor (
  color: string,
  overlayAlpha: number = 0.15
): string {
  return composite(color, [0, 0, 0, overlayAlpha])
}

export const colors = {
  primaryColor: '#4FB233',
  primaryColorHover: createHoverColor('#4FB233'),
  primaryColorPressed: createPressedColor('#4FB233'),
  infoColor: '#335FFF',
  infoColorHover: createHoverColor('#335FFF'),
  infoColorPressed: createPressedColor('#335FFF'),
  successColor: '#4FB233',
  successColorHover: createHoverColor('#4FB233'),
  successColorPressed: createPressedColor('#4FB233'),
  errorColor: '#D92149',
  errorColorHover: createHoverColor('#D92149'),
  errorColorPressed: createPressedColor('#D92149'),
  warningColor: '#FFAC26',
  warningColorHover: createHoverColor('#FFAC26', 0.2),
  warningColorPressed: createPressedColor('#FFAC26', 0.05)
}

export const themeOverrides: GlobalThemeOverrides = {
  common: {
    borderRadius: '16px',
    boxShadow2: '0 2px 16px 0 rgba(0,0,0,0.10), 0 0 16px -2px rgba(0,0,0,0.06)',
    borderColor: '#999',
    dividerColor: '#EBEDF0',
    textColor2: '#333',
    tableHeaderColorOverlay: '#EBEDF0',
    inputColorDisabled,
    actionColor: inputColorDisabled,
    hoverColor: composite(colors.primaryColor, 'rgba(255, 255, 255, .1)'),
    clearColor: composite('#FFF', 'rgba(0, 0, 0, .4)'),
    ...colors
  },
  BackTop: {
    width: '48px',
    height: '48px',
    iconSize: '24px',
    borderRadius: '24px',
    iconColor: 'rgba(0, 0, 0, .8)',
    iconColorHover: commonLight.primaryColor,
    iconColorPressed: commonLight.primaryColorPressed,
    boxShadow:
      '0 40px 16px -24px rgba(0,0,0,0.04), 0 8px 16px -8px rgba(0,0,0,0.12), 0 16px 40px 16px rgba(0,0,0,0.04)',
    boxShadowHover:
      '0 40px 16px -24px rgba(0,0,0,0.04), 0 8px 16px -8px rgba(0,0,0,0.12), 0 16px 40px 16px rgba(0,0,0,0.04)',
    boxShadowPressed:
      '0 40px 16px -24px rgba(0,0,0,0.04), 0 8px 16px -8px rgba(0,0,0,0.12), 0 16px 40px 16px rgba(0,0,0,0.04)'
  },
  Breadcrumb: {
    fontSize: '16px',
    fontWeightActive: '500'
  },
  Button: {
    textColorWarning: '#333',
    iconSizeTiny: '16px',
    iconSizeSmall: '20px',
    iconSizeMedium: '20px',
    iconSizeLarge: '28px',
    borderRadiusTiny: '12px',
    borderRadiusSmall: '16px',
    borderRadiusMedium: '24px',
    borderRadiusLarge: '40px',
    heightTiny: '24px',
    heightSmall: '32px',
    heightMedium: '48px',
    heightLarge: '80px',
    fontSizeTiny: '14px',
    fontSizeSmall: '16px',
    fontSizeMedium: '16px',
    fontSizeLarge: '24px',
    paddingTiny: '0 12px',
    paddingSmall: '0 24px',
    paddingMedium: '0 48px',
    paddingLarge: '0 80px',
    paddingRoundTiny: '0 12px',
    paddingRoundSmall: '0 24px',
    paddingRoundMedium: '0 48px',
    paddingRoundLarge: '0 80px',
    opacityDisabled: '1',
    colorDisabled: '#EBEDF0',
    colorDisabledPrimary: '#EBEDF0',
    colorDisabledInfo: '#EBEDF0',
    colorDisabledSuccess: '#EBEDF0',
    colorDisabledWarning: '#EBEDF0',
    colorDisabledError: '#EBEDF0',
    borderDisabled: '1px solid #EBEDF0',
    borderDisabledPrimary: '1px solid #EBEDF0',
    borderDisabledInfo: '1px solid #EBEDF0',
    borderDisabledSuccess: '1px solid #EBEDF0',
    borderDisabledWarning: '1px solid #EBEDF0',
    borderDisabledError: '1px solid #EBEDF0',
    textColorDisabled: '#CCCCCC',
    textColorDisabledPrimary: '#CCCCCC',
    textColorDisabledInfo: '#CCCCCC',
    textColorDisabledSuccess: '#CCCCCC',
    textColorDisabledWarning: '#CCCCCC',
    textColorDisabledError: '#CCCCCC',
    textColorGhostDisabled: '#D7DAE0',
    textColorGhostDisabledPrimary: '#D7DAE0',
    textColorGhostDisabledInfo: '#D7DAE0',
    textColorGhostDisabledSuccess: '#D7DAE0',
    textColorGhostDisabledWarning: '#D7DAE0',
    textColorGhostDisabledError: '#D7DAE0',
    textColorTextDisabled: '#D7DAE0',
    textColorTextDisabledPrimary: '#D7DAE0',
    textColorTextDisabledInfo: '#D7DAE0',
    textColorTextDisabledSuccess: '#D7DAE0',
    textColorTextDisabledWarning: '#D7DAE0',
    textColorTextDisabledError: '#D7DAE0',
    iconMarginSmall: '8px',
    iconMarginMedium: '8px',
    iconMarginLarge: '12px'
  },
  DataTable: {
    fontSizeMedium: '16px',
    thPaddingMedium: '12px 0 12px 20px',
    thColor: '#EBEDF0',
    thTextColor: commonLight.textColor2,
    thFontWeight: commonLight.fontWeight,
    tdColorHover: composite(
      commonLight.primaryColor,
      'rgba(255, 255, 255, .9)'
    ),
    thButtonColorHover: 'transparent',
    thColorModal: '#EBEDF0',
    tdColorHoverModal: composite(
      commonLight.primaryColor,
      'rgba(255, 255, 255, .9)'
    )
  },
  DatePicker: {
    itemBorderRadius: '14px',
    panelHeaderDividerColor: 'transparent',
    calendarDaysDividerColor: 'transparent',
    arrowColor: '#CCC',
    arrowSize: '24px',
    itemFontSize: '16px',
    calendarDaysFontSize: '16px',
    calendarTitleFontSize: '16px',
    panelActionPadding: '12px 20px',
    itemSize: '28px',
    itemCellHeight: '34px',
    itemCellWidth: '40px',
    calendarTitlePadding: '0 8px 8px 8px',
    calendarTitleHeight: '32px',
    calendarLeftPaddingDate: '12px 16px 9px 16px',
    calendarLeftPaddingDaterange: '12px 16px 9px 16px',
    calendarLeftPaddingDatetime: '6px 16px 9px 16px',
    calendarLeftPaddingDatetimerange: '6px 16px 9px 16px',
    calendarRightPaddingDaterange: '12px 16px 9px 16px',
    calendarRightPaddingDatetimerange: '6px 16px 9px 16px',
    calendarDividerColor: 'transparent',
    panelHeaderPadding: '12px 20px 8px 20px'
  },
  Dialog: {
    padding: '40px',
    iconSize: '36px',
    iconMarginIconTop: '0 0 12px 0',
    closeMarginIconTop: '24px 24px 0 0',
    titleFontSize: '24px',
    fontSize: '16px',
    actionSpace: '20px',
    contentMargin: '12px 0 40px 0'
  },
  DynamicTags: {
    peers: {
      Tag: {
        heightMedium: '24px'
      },
      Input: {
        heightSmall: '24px'
      }
    }
  },
  Input: {
    heightMedium: '32px',
    fontSizeMedium: '16px',
    paddingLeft: '12px',
    paddingRight: '12px',
    paddingIcon: '44px',
    iconSize: '24px',
    borderHover: `1px solid ${colors.primaryColor}`,
    borderFocus: `1px solid ${colors.primaryColor}`,
    borderDisabled: '1px solid transparent'
  },
  InternalSelection: {
    heightMedium: '32px',
    fontSizeMedium: '16px',
    paddingSingle: '0 36px 0 12px',
    border: '1px solid transparent'
  },
  InternalSelectMenu: {
    boxShadow: commonLight.boxShadow2,
    paddingSmall: '4px 0',
    paddingMedium: '6px 0',
    paddingLarge: '6px 0',
    paddingHuge: '8px 0'
  },
  Form: {
    blankHeightSmall: vars.CONTENT_SPACE,
    blankHeightMedium: vars.CONTENT_SPACE,
    blankHeightLarge: vars.CONTENT_SPACE,
    feedbackHeightSmall: vars.CONTENT_SPACE,
    feedbackHeightMedium: vars.CONTENT_SPACE,
    feedbackHeightLarge: vars.CONTENT_SPACE,
    feedbackFontSizeSmall: vars.SMALL_FRONT_SIZE,
    feedbackFontSizeMedium: vars.SMALL_FRONT_SIZE,
    feedbackFontSizeLarge: vars.SMALL_FRONT_SIZE,
    labelFontSizeLeftSmall: vars.SMALL_FRONT_SIZE,
    labelFontSizeLeftMedium: vars.SMALL_FRONT_SIZE,
    labelFontSizeLeftLarge: vars.NORMAL_FRONT_SIZE,
    labelFontSizeTopSmall: vars.SMALL_FRONT_SIZE,
    labelFontSizeTopMedium: vars.SMALL_FRONT_SIZE,
    labelFontSizeTopLarge: vars.NORMAL_FRONT_SIZE,
    labelHeightSmall: '22px',
    labelHeightMedium: '22px',
    labelHeightLarge: '22px',
    labelTextAlignHorizontal: 'left'
  },
  Message: {
    padding: '0 20px 0 12px',
    maxWidth: '720px',
    minWidth: '420px',
    iconMargin: '20px',
    closeMargin: '0 0 0 22px',
    colorInfo: commonLight.warningColor,
    colorWarning: commonLight.errorColor,
    iconColorInfo: 'rgb(0, 0, 0)',
    iconColorSuccess: 'rgb(255, 255, 255)',
    iconColorWarning: 'rgb(255, 255, 255)',
    iconColorError: 'rgb(255, 255, 255)',
    iconColorLoading: 'rgb(255, 255, 255)',
    closeColorInfo: 'rgb(0, 0, 0)',
    closeColorHoverInfo: 'rgb(0, 0, 0)',
    closeColorPressedInfo: 'rgb(0, 0, 0)',
    closeColorSuccess: 'rgb(255, 255, 255)',
    closeColorHoverSuccess: 'rgb(255, 255, 255)',
    closeColorPressedSuccess: 'rgb(255, 255, 255)',
    closeColorError: 'rgb(255, 255, 255)',
    closeColorHoverError: 'rgb(255, 255, 255)',
    closeColorPressedError: 'rgb(255, 255, 255)',
    closeColorWarning: 'rgb(255, 255, 255)',
    closeColorHoverWarning: 'rgb(255, 255, 255)',
    closeColorPressedWarning: 'rgb(255, 255, 255)',
    closeColorLoading: 'rgb(0, 0, 0)',
    closeColorHoverLoading: 'rgb(0, 0, 0)',
    closeColorPressedLoading: 'rgb(0, 0, 0)',
    closeSize: '20px',
    iconSize: '20px'
  },
  Pagination: {
    itemSize: '32px',
    itemPadding: '0',
    // buttonFontSize: '24px',
    itemFontSize: '16px',
    inputWidth: '80px',
    selectWidth: '100px',
    inputMargin: '0 20px',
    itemMargin: '0 20px 0 0',
    itemBorder: 'none',
    itemBorderActive: 'none',
    itemBorderDisabled: 'none',
    itemColor: 'transparent',
    itemColorHover: composite(
      commonLight.primaryColor,
      'rgba(255, 255, 255, 0.9)'
    ),
    itemColorActive: 'transparent',
    itemColorDisabled: 'transparent',
    itemBorderRadius: '100px',
    itemTextColorHover: commonLight.textColor2,
    itemTextColorDisabled: '#D7DAE0',
    buttonBorder: 'none',
    buttonIconColorHover: commonLight.primaryColor
  },
  Popover: {
    padding: '20px',
    fontSize: '16px',
    arrowOffset: '40px',
    arrowOffsetVertical: '16px',
    arrowHeight: '8px',
    spaceArrow: '14px'
  },
  Progress: {
    railHeight: '4px',
    fontSizeCircle: '24px',
    iconSizeCircle: '30px',
    iconSizeLine: '20px',
    iconColor: colors.warningColor,
    iconColorInfo: colors.warningColor,
    iconColorSuccess: colors.successColor,
    iconColorWarning: colors.errorColor,
    iconColorError: colors.errorColor,
    fillColor: colors.warningColor,
    fillColorInfo: colors.warningColor,
    fillColorSuccess: colors.successColor,
    fillColorWarning: colors.warningColor,
    fillColorError: colors.errorColor,
    textColorCircle: '#666666'
  },
  Switch: {
    railHeightMedium: '15px',
    railHeightLarge: '20px',
    railBorderRadiusMedium: '8px',
    railBorderRadiusLarge: '10px',
    railWidthMedium: '40px',
    railWidthLarge: '50px',
    buttonHeightMedium: '24px',
    buttonHeightLarge: '32px',
    buttonWidthMedium: '24px',
    buttonWidthLarge: '32px',
    buttonWidthPressedMedium: '30px',
    buttonWidthPressedLarge: '38px',
    buttonBorderRadiusMedium: '12px',
    buttonBorderRadiusLarge: '16px',
    railColor: '#EBEDF0',
    railColorActive: '#EBEDF0',
    buttonBoxShadow: '0 2px 3px 0 rgba(0,0,0,0.10)'
  },
  Table: {
    thColor: '#EBEDF0',
    thTextColor: commonLight.textColor2,
    thFontWeight: commonLight.fontWeight
  },
  Tag: {
    borderRadius: '16px',
    borderColor: 'transparent',
    color: 'rgba(153,153,153,0.10)',
    closeColor: commonLight.closeColorOverlay,
    closeColorHover: commonLight.closeColorOverlay,
    closeColorPressed: commonLight.closeColorOverlay,
    borderColorPrimary: 'transparent',
    closeColorPrimary: commonLight.closeColorOverlay,
    closeColorHoverPrimary: commonLight.closeColorOverlay,
    closeColorPressedPrimary: commonLight.closeColorOverlay,
    borderColorInfo: 'transparent',
    borderColorSuccess: 'transparent',
    borderColorWarning: 'transparent',
    borderColorError: 'transparent',
    padding: '0 12px',
    closeMargin: '0 0 0 8px',
    heightMedium: '24px',
    closeSizeSmall: '20px',
    closeSizeMedium: '20px',
    closeSizeLarge: '20px',
    fontSizeSmall: '12px',
    fontSizeMedium: '16px',
    fontSizeLarge: '16px'
  },
  TimePicker: {
    itemFontSize: '16px',
    itemHeight: '38px',
    itemWidth: '66px',
    panelActionPadding: '12px 20px'
  },
  Tooltip: {
    peers: {
      Popover: {
        padding: '20px',
        fontSize: '16px'
      }
    }
  },
  Typography: {
    headerPrefixWidth3: '15px',
    headerPrefixWidth4: '15px',
    headerPrefixWidth5: '15px',
    headerPrefixWidth6: '15px'
  }
}