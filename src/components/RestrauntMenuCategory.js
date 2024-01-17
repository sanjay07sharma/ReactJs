

const RestrauntMenuCategory = (props) => {
  // TODO investigate why props is empty
  return (
    <div>
      {
        menu.map((item, index) => {
          return (
            <div key={index}>
              {/* Render your item here */}
            </div>
          );
        })
      }
    </div>
  );
};

export default RestrauntMenuCategory;
