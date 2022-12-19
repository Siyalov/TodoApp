import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoContainer: {
    flexDirection: 'row',
  },
  textContainer: {
    marginLeft: 15,
  },
  nameText: {
    fontSize: 18,
    marginBottom: 5,
  },
  completedNameText: {
    color: '#B9B9BE',
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 3,
  },
  categoryText: {
    color: '#58595B',
  },
});

export default styles;
