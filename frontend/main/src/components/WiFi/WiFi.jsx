import PropTypes from "prop-types";

function WiFiDetails({ wifi }) {
  if (!wifi || typeof wifi !== "object") {
    return (
      <section>
        <h2>WiFi Details</h2>
        <p>No WiFi details available</p>
      </section>
    );
  }

  const entries = Object.entries(wifi);

  return (
    <section>
      <h2>WiFi Details</h2>
      <ul>
        {entries.map(([key, value]) => (
          <li key={key}>
            <strong>{key.replace(/_/g, " ")}: </strong>
            {value || "N/A"}
          </li>
        ))}
      </ul>
    </section>
  );
}

WiFiDetails.propTypes = {
  wifi: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

export default WiFiDetails;
