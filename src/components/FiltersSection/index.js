import { MainContainer, Option } from "./styledComponents";

const categoritesList = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const FiltersSection = ({ selectedCategory, onCategoryChange }) => {
  const handleOptionChange = (event) => {
    onCategoryChange(event.target.value);
  };

  return (
    <MainContainer>
        <h1>Select Category</h1>
      {categoritesList.map((eachCategory) => (
        <Option key={eachCategory}>
          <input
            name="category"
            value={eachCategory}
            onChange={handleOptionChange}
            id={eachCategory}
            type="radio"
            checked={selectedCategory === eachCategory}
          />
          <label htmlFor={eachCategory}>{eachCategory}</label>
        </Option>
      ))}
    </MainContainer>
  );
};

export default FiltersSection;
