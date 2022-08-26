const GenericErrorPage = ({ errorMessage }) => {
  return (
    <section id="section__error-page">
      <h3>Something went wrong!</h3>
      <p>An unexpected error occurred: {errorMessage}</p>
    </section>
  );
};

export default GenericErrorPage;
