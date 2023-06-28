/**
 * Defining a CustomTooltip function component
 */
function CustomTooltip({ payload, active }) {
    // If tooltip is active and there's payload data
    if (active && payload && payload.length) {
      // Render a custom tooltip box with session length in minutes
      return (
        <div style={{ backgroundColor: '#fff', padding: '0rem 1rem 0rem 1rem', border: '1px solid #ccc' }}>
          {/* Displaying the value of the first element in payload as minutes */}
          <p className="label">{`${payload[0].value} min`}</p> 
        </div>
      );
    }
  
    // If tooltip is not active or there's no payload data, render nothing ti avoid error
    return null;
  }
  
  export default CustomTooltip;
  