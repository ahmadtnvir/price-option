import PropTypes from 'prop-types';

const Link = ({route}) => {
  // console.log(route);
  return (
    <li className="mr-8">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

Link.propTypes = {
  route: PropTypes.object.isRequired,
}
export default Link;
