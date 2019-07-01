import Colors from './Colors';

const ApplicationStyle = {
  viewPadding: {
    // padding: 20,
    // borderWidth: 1,
  },
  card: {
    padding: 20,
    borderWidth: 0.5,
    borderColor: 'grey',
  },
  navStyle: {
    backgroundColor: Colors.blue,
  },
  title: {
    fontWeight: '600',
    fontSize: 25,
  },
  sectionTitle: {
    fontWeight: '600',
    fontSize: 18,
    paddingBottom: 10,
  },
  text: {
    fontSize: 18,
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
    padding: 10,
    justifyContent: 'space-between',
  },
  navTextButton: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.textGrey,
    flexDirection: 'row',
    borderRadius: 2,
  },
};

export default ApplicationStyle;
