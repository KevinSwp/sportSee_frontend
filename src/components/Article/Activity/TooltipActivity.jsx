/**
 * Defining a CustomTooltip function component
 */
function CustomTooltip({ payload, active }) {
    if (active && payload && payload.length) {
      return (
        <div style={{ backgroundColor: 'red', padding: '5px', border: '0px' }}>
          {/* First item in the payload array */}
          <p className="label">{`${payload[0].value} kg`}</p>
          {/* Second item in the payload array */}
          <p className="label">{`${payload[1].value} Kcal`}</p>
        </div>
      );
    }
    return null;
  }
  
  
  export default CustomTooltip;
  