import PacmanLoader from "react-spinners/PacmanLoader";

const Spinner = (loading) => {
  return (
    <PacmanLoader
      color="#3b82f6"
      size={20}
      cssOverride={{ margin: "48px", textAlign: "center" }}
      loading={loading}
    />
  );
};
export default Spinner;
