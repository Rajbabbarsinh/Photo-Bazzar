const Image = ({ imageInfo }) => {
    return (
      <div className="image">
        <img src={imageInfo.urls.regular} alt="Weather" />
      </div>
    );
  };
  
  export const ImagesList = ({ data }) => {
    return (
      <>
        {data.results.map((result) => {
          return <Image imageInfo={result} key={result.id} />;
        })}
      </>
    );
  };