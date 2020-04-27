var classNames = require('classnames');

let Card = (props) => {
  let classname = classNames(
    props.className,
    'overflow-hidden rounded-lg bg-gray-50'
  );
  return (
    <div className={classname}>
      <div className="px-4 py-5 sm:p-6">{props.children}</div>
    </div>
  );
};
export default Card;
