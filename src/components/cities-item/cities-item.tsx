type CitiesItemProps = {
  city: string;
  onClick?: () => void;
  activeClass: string | null;
};

function CitiesItem({ city, onClick, activeClass }: CitiesItemProps): JSX.Element {
  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${activeClass}`}
        href="#"
        onClick={onClick}
      >
        <span> {city} </span>
      </a>
    </li>
  );
}
export { CitiesItem };
