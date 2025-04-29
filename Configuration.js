function getConfiguration(config)
{
  // This function allows you to indicate general configuration values
  // for all devices of this model.

  // Depending on the meaning of the "device address" in this device, 
  // you may want to change the label that is used to refer to the 
  // address in the user interface.
  // For instance, if the address of the device is actually a MAC 
  // address, you may want to use the code below.
  
  config.addressLabel = {en: "DevEUI", es: "DevEUI"};
}


function getEndpoints(deviceAddress, endpoints)
{
    endpoints.addEndpoint("1", "Temperature sensor", endpointType.temperatureSensor);
    endpoints.addEndpoint("2", "Humidity sensor", endpointType.humiditySensor);
    var solar = endpoints.addEndpoint("3", " Solar and UV", endpointType.genericSensor);
        solar.variableTypeId = 1013;
    var wind_speed = endpoints.addEndpoint("4", "Wind Speed", endpointType.genericSensor);
        wind_speed.variableTypeId = 1014;
    var rainfall = endpoints.addEndpoint("5", "Rainfall", endpointType.genericSensor);
        rainfall.variableTypeId = 1015;
    var wind_dir = endpoints.addEndpoint("6", "Wind_direction", endpointType.genericSensor);
        wind_dir.variableTypeId = 1016;
    var pressure_atm = endpoints.addEndpoint("7", "Pressure_atm", endpointType.genericSensor);
        pressure_atm.variableTypeId = 1017;
    var eto = endpoints.addEndpoint("8", "ETo", endpointType.genericSensor);
        eto.variableTypeId = 1018;
    endpoints.addEndpoint("9", "Temperature_max", endpointType.temperatureSensor);
    endpoints.addEndpoint("10", "Temperature_min", endpointType.temperatureSensor);
    endpoints.addEndpoint("11", "Temperature_mean", endpointType.temperatureSensor);
    endpoints.addEndpoint("12", "Humidity_max", endpointType.humiditySensor);
    endpoints.addEndpoint("13", "Humidity_min", endpointType.humiditySensor);
    endpoints.addEndpoint("14", "Humidity_mean", endpointType.humiditySensor);
    var wind_speed_mx = endpoints.addEndpoint("15", "Wind Speed Max", endpointType.genericSensor);
        wind_speed_mx.variableTypeId = 1014;
    var wind_speed_min = endpoints.addEndpoint("16", "Wind Speed Min", endpointType.genericSensor);
        wind_speed_min.variableTypeId = 1014;
    var solar_mean = endpoints.addEndpoint("17", " Solar and UV Mean", endpointType.genericSensor);
        solar_mean.variableTypeId = 1013;
    var rainfall_ac = endpoints.addEndpoint("18", "Rainfall acum", endpointType.genericSensor);
        rainfall_ac.variableTypeId = 1015;

}


function validateDeviceAddress(address, result)
{
  // This function allows you to validate the address of a device, when
  // the user is creating it. If your device has special validation rules
  // for the address, you can check them here, and return an error message
  // in case the address format is incorrect.

  // In the code below, a validation is made to ensure that the address 
  // is exactly 10 characters long.
  
  // if (address.length != 10) {
  //   result.ok = false;
  //   result.errorMessage = {
  //     en: "The address must be 10 characters long", 
  //     es: "La dirección debe tener exactamente 10 caracteres"
  //   };
  // }
}

function updateDeviceUIRules(device, rules)
{
  // This function allows you to specify UI rules at the device level.
  // For instance, you can make it possible to enable or disable adding
  // endpoints manually to the device after it was created.
  
  // In the code below, adding endpoints manually is disabled in the
  // user interface. This means that the device will be limited to the 
  // endpoints defined by function getEndpoints() above.
  
  rules.canCreateEndpoints = true;
}

function updateEndpointUIRules(endpoint, rules)
{
  // This function allows you to specify UI rules at the endpoint level.
  // For instance, you can make it possible to delete certain endpoints, 
  // or edit their endpoint subtype, if applicable.

  // In the code below, the following rules are defined:
  // - Endpoints cannot be deleted.
  // - The endpoint subtype can be changed, but only for the second 
  //   endpoint.
  
  rules.canDelete = true;
  // rules.canEditSubType = (endpoint.address == "2");
}
