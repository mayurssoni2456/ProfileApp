import Colors from './Colors';

export const fontSize = {
  small: 12,
  xMedium: 16,
  medium: 18,
  large: 20,
  xxLarge: 24,
  xxLarge: 28,
};

export const padding = {
  xSmall: 5,
  small: 10,
  medium: 20,
  large: 30,
  xLarge: 40,
};

const ApplicationStyle = {
  card: {
    padding: padding.medium,
    borderWidth: 0.5,
    borderColor: 'grey',
  },
  navStyle: {
    backgroundColor: Colors.blue,
  },
  title: {
    fontWeight: '600',
    fontSize: fontSize.xxLarge,
  },
  sectionTitle: {
    fontWeight: '600',
    fontSize: fontSize.medium,
    paddingBottom: padding.small,
  },
  text: {
    fontSize: fontSize.medium,
    paddingVertical: 5,
    color: 'rgba(51,51,51,1)',
  },
  icon: {
    width: 10,
    height: 22,
  },
  navButton: {
    // backgroundColor: Colors.blue,
    borderColor: Colors.borderGrey,
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: 3,
    padding: padding.small,
    justifyContent: 'space-between',
  },
  navTextButton: {
    fontSize: fontSize.medium,
    fontWeight: '600',
    color: Colors.textGrey,
    flexDirection: 'row',
    borderRadius: 2,
  },
};

export default ApplicationStyle;
