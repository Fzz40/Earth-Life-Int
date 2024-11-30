import React from "react";
import PropTypes from "prop-types";
import "./RegionSelect.css"; // Import custom CSS file

function RegionSelect({ selectedRegion, setSelectedRegion }) {
  return (
    <div className="region-select-card">
      <div className="region-select-body">
        <h5 className="region-select-title">Select Region</h5>
        <select
          className="region-select-dropdown"
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
        >
          {/* Africa */}
          <option value="Africa - Abidjan">Africa - Abidjan</option>
          <option value="Africa - Accra">Africa - Accra</option>
          <option value="Africa - Addis Ababa">Africa - Addis Ababa</option>
          <option value="Africa - Algiers">Africa - Algiers</option>
          <option value="Africa - Nairobi">Africa - Nairobi</option>

          {/* America */}
          <option value="America - Bogota">America - Bogota</option>
          <option value="America - Brasilia">America - Brasilia</option>
          <option value="America - Buenos Aires">America - Buenos Aires</option>
          <option value="America - New York">America - New York</option>
          <option value="America - Mexico City">America - Mexico City</option>

          {/* Asia */}
          <option value="Asia - Beijing">Asia - Beijing</option>
          <option value="Asia - Tokyo">Asia - Tokyo</option>
          <option value="Asia - New Delhi">Asia - New Delhi</option>
          <option value="Asia - Seoul">Asia - Seoul</option>
          <option value="Asia - Bangkok">Asia - Bangkok</option>

          {/* Europe */}
          <option value="Europe - London">Europe - London</option>
          <option value="Europe - Paris">Europe - Paris</option>
          <option value="Europe - Berlin">Europe - Berlin</option>
          <option value="Europe - Moscow">Europe - Moscow</option>
          <option value="Europe - Rome">Europe - Rome</option>

          {/* Australia */}
          <option value="Australia - Canberra">Australia - Canberra</option>
          <option value="Australia - Sydney">Australia - Sydney</option>
          <option value="Australia - Melbourne">Australia - Melbourne</option>

          {/* Indian Ocean */}
          <option value="Indian Ocean - Maldives">
            Indian Ocean - Maldives
          </option>
          <option value="Indian Ocean - Seychelles">
            Indian Ocean - Seychelles
          </option>
          <option value="Indian Ocean - Mauritius">
            Indian Ocean - Mauritius
          </option>

          {/* Pacific */}
          <option value="Pacific - Suva">Pacific - Suva</option>
          <option value="Pacific - Auckland">Pacific - Auckland</option>
          <option value="Pacific - Tahiti">Pacific - Tahiti</option>
          <option value="Pacific - Fiji">Pacific - Fiji</option>

          {/* Atlantic */}
          <option value="Atlantic - Azores">Atlantic - Azores</option>
          <option value="Atlantic - Canary Islands">
            Atlantic - Canary Islands
          </option>
          <option value="Atlantic - Bermuda">Atlantic - Bermuda</option>
          <option value="Atlantic - Iceland">Atlantic - Iceland</option>
        </select>
      </div>
    </div>
  );
}

// Define PropTypes for the component
RegionSelect.propTypes = {
  selectedRegion: PropTypes.string,
  setSelectedRegion: PropTypes.func.isRequired,
};

export default RegionSelect;
