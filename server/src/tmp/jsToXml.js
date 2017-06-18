var js2xmlparser = require("js2xmlparser");
var jsf = require('json-schema-faker');

var obj = {
    "context": {
        "subClientId": "BorderFree_Site_Tablet",
        "ipAddress": "66.67.18.210"
    },
    "guid": "550f28b4-4a71-4c25-94b5-ff5ae3b0822e",
    "number": "69970",
    "shipments": [{
        "shipment": {
            "shippingContact": {
                "address": {
                    "addressLine1": "825 Wyman Mountains",
                    "city": "West Emiliano",
                    "state": "Oklahoma",
                    "country": "USA",
                    "postalCode": "00140",
                    "addressLine2": "Suite 393"
                },
                "emailAddress": "Hayden.OReilly@hotmail.com",
                "firstName": "Jadon",
                "lastName": "Miller"
            }
        }
    }]
}

// console.log(js2xmlparser.parse("order", obj));

var object = {
    "$ref": "test"
}

var refer = [{
    "id": "test",
    "type": "number",
    "minimum": 1,
    "maximum": 3
}]

var mstOrder = [{
    "type": "object",
    "id": "mstOrder",
    "properties": {
        "@": {
            "type": "object",
            "properties": {
                "xmlns:ns2": {
                    "enum": ["http://www.mst.macys.com/xsd/order"]
                },
                "xmlns:ns3": {
                    "enum": ["http://www.macys.com/enterprise_services"]
                },
                "xmlns:ns4": {
                    "enum": ["http://www.macys.com/enterprise_services"]
                }
            },
            "required": ["xmlns:ns2", "xmlns:ns3", "xmlns:ns4"]
        },

        "header": {
            "type": "object",
            "id": "urn:jsonschema:com:macys:platform:providers:jaxb:ordertotal:OrderHeader",
            "properties": {
                "referringId": {
                    "enum": [271, 272]
                },
                "orderId": {
                    "type": "integer",
                    "minimum": 100
                },
                "partnerOrderId": {
                    "type": "string",
                    "faker": "random.number",
                    "minimum": 100,
                    "description": "Order Reservation Number"
                },
                "clientId": {
                    "enum": ["MCOM"]
                },
                "subclientId": {
                    "enum": ["ESend_SNS", "ESend_POS", "MMEW", "MSA", "Site", "BMEW", "iShop_iPhone", "iShop_Android", "iShop_Unknown", "Site_Tablet", "loop_commerce", "COSMIC_CART", "group_gifting", "Vanguard", "Unknown", "pinterest", "WSSG", "shopstyle", "BorderFree_MMEW", "BorderFree_Site", "BorderFree_Site_Tablet", "BorderFree_BMEW"]
                }
            },
            "required": ["subclientId", "partnerOrderId", "orderId", "clientId", "referringId"]
        },
        "prepareSequenceNumber": {
            "type": "integer"
        },
        "estimatedShippingTax": {
            "type": "number",
            "chance": {
                "floating": {
                    "min": 0,
                    "max": 10
                }
            }
        },
        "lineItemList": {
            "type": "object",
            "id": "urn:jsonschema:com:macys:platform:providers:jaxb:ordertotal:PrepareOrderResponse:LineItemList",
            "properties": {
                "ns2:lineItem": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "id": "urn:jsonschema:com:macys:platform:providers:jaxb:ordertotal:LineItem",
                        "properties": {
                            "partnerLineId": {
                                "type": "integer",
                                "minimum": 1,
                                "maximum": 10
                            },
                            "partnerShipmentId": {
                                "type": "integer",
                                "minimum": 1,
                                "maximum": 10
                            },
                            "adjustedQuantity": {
                                "type": "integer",
                                "minimum": 1,
                                "maximum": 3
                            },
                            "fdIndicator": {
                                "type": "string",
                                "chance": {
                                    "string": {
                                        "length": 0
                                    }
                                }
                            },
                            "item": {
                                "type": "object",
                                "id": "urn:jsonschema:com:macys:platform:providers:jaxb:ordertotal:Item",
                                "properties": {
                                    "upc": {
                                        "type": "integer",
                                        "minimum": 5242
                                    },
                                    "categoryDescription": {
                                        "type": "string",
                                        "faker": "commerce.department"
                                    },
                                    "productDescription": {
                                        "type": "string",
                                        "faker": "commerce.productName"
                                    },
                                    "isGiftwrapAvailable": {
                                        "type": "boolean"
                                    },
                                    "isGiftMessageSupported": {
                                        "type": "boolean"
                                    },
                                    "isClearanceItem": {
                                        "type": "boolean"
                                    },
                                    "isSameSKUUPCNumber": {
                                        "type": "boolean"
                                    }
                                },
                                "required": ["upc", "isGiftwrapAvailable", "isGiftMessageSupported"]
                            },
                            "fulfillmentInfo": {
                                "type": "object",
                                "id": "urn:jsonschema:com:macys:platform:providers:jaxb:ordertotal:FulfillmentInfo",
                                "properties": {
                                    "orderMethod": {
                                        "enum": ["POOL"]
                                    },
                                    "fillDivisionNumber": {
                                        "type": "integer",
                                        "minimum": 1,
                                        "maximum": 100
                                    },
                                    "fillStoreNumber": {
                                        "type": "integer",
                                        "minimum": 1,
                                        "maximum": 1000
                                    },
                                    "dropshipDeliveryMethod": {
                                        "type": "string"
                                    },
                                    "dropshipVendorNumber": {
                                        "type": "integer"
                                    },
                                    "itemReturnCode": {
                                        "type": "string"
                                    }
                                },
                                "required": ["orderMethod", "fillDivisionNumber", "fillStoreNumber", "itemReturnCode"]
                            },
                            "shipRep": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "id": "urn:jsonschema:com:macys:platform:providers:jaxb:ordertotal:ShipRep",
                                    "properties": {
                                        "orderMethod": {
                                            "enum": ["POOL"]
                                        },
                                        "deliveryType": {
                                            "type": "string",
                                            "faker": "random.number",
                                            "minimum": 1,
                                            "maximum": 100
                                        },
                                        "shipDate": {
                                            "type": "string",
                                            "chance": {
                                                "date": {
                                                    "string": true,
                                                    "american": true
                                                }
                                            }
                                        },
                                        "shipTime": {
                                            "type": "string"
                                        },
                                        "shipDays": {
                                            "type": "integer",
                                            "minimum": 1,
                                            "maximum": 100
                                        },
                                        "shipDaysIndicator": {
                                            "enum": ["C"]
                                        }
                                    },
                                    "required": ["orderMethod", "deliveryType", "shipDate", "shipDays", "shipDaysIndicator"]
                                },
                                "minItems": 1,
                                "maxItems": 1
                            },
                            "deliveryDetails": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "id": "urn:jsonschema:com:macys:platform:providers:jaxb:ordertotal:DeliveryDetails",
                                    "properties": {
                                        "estArrivalDate": {
                                            "type": "string",
                                            "chance": {
                                                "date": {
                                                    "string": true,
                                                    "american": true
                                                }
                                            }
                                        },
                                        "deliveryDays": {
                                            "type": "integer",
                                            "minimum": 1,
                                            "maximum": 100
                                        },
                                        "deliveryInd": {
                                            "enum": ["C"]
                                        },
                                        "deliveryType": {
                                            "type": "string"
                                        }
                                    },
                                    "required": ["estArrivalDate", "deliveryDays", "deliveryInd", "deliveryType"]
                                },
                                "minItems": 1,
                                "maxItems": 1
                            }
                        },
                        "required": ["partnerLineId", "partnerShipmentId", "adjustedQuantity", "fdIndicator", "item", "fulfillmentInfo", "shipRep", "deliveryDetails"]
                    },
                    "minItems": 1,
                    "maxItems": 2
                }
            },
            "required": ["ns2:lineItem"]
        },
        "shipmentList": {
            "type": "object",
            "id": "urn:jsonschema:com:macys:platform:providers:jaxb:ordertotal:PrepareOrderResponse:ShipmentList",
            "properties": {
                "ns2:shipment": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "id": "urn:jsonschema:com:macys:platform:providers:jaxb:ordertotal:Shipment",
                        "properties": {
                            "partnerShipmentId": {
                                "type": "string",
                                "faker": "random.number",
                                "minimum": 1,
                                "maximum": 10
                            },
                            "shipmentId": {
                                "type": "integer",
                                "minimum": 1,
                                "maximum": 10
                            },
                            "mkpDetails": {
                                "type": "object",
                                "id": "urn:jsonschema:com:macys:platform:providers:jaxb:ordertotal:MkpDetailsType",
                                "properties": {
                                    "mkpReservationDesc": {
                                        "type": "string"
                                    },
                                    "mkpReservationID": {
                                        "type": "integer"
                                    },
                                    "mkpEventType": {
                                        "type": "string"
                                    },
                                    "mkpEstimatedShipDate": {
                                        "type": "string"
                                    },
                                    "mkpEstimatedReturnDate": {
                                        "type": "string"
                                    },
                                    "mkpEstimatedDeliveryDate": {
                                        "type": "string"
                                    },
                                    "mkpRenterToFirstName": {
                                        "type": "string"
                                    },
                                    "mkpRenterToLastName": {
                                        "type": "string"
                                    },
                                    "mkpEventDate": {
                                        "type": "string"
                                    },
                                    "mkpImageUrl": {
                                        "type": "string"
                                    },
                                    "mkpUpcPDPUrl": {
                                        "type": "string"
                                    },
                                    "mkpWarehouseAddress": {
                                        "type": "object",
                                        "id": "urn:jsonschema:com:macys:platform:providers:jaxb:ordertotal:MkpWarehouseAddress",
                                        "properties": {
                                            "address": {
                                                "type": "object",
                                                "id": "urn:jsonschema:com:macys:platform:providers:jaxb:ordertotal:Address",
                                                "properties": {
                                                    "line1": {
                                                        "type": "string"
                                                    },
                                                    "line2": {
                                                        "type": "string"
                                                    },
                                                    "line3": {
                                                        "type": "string"
                                                    },
                                                    "city": {
                                                        "type": "string"
                                                    },
                                                    "state": {
                                                        "type": "string"
                                                    },
                                                    "zipCode": {
                                                        "type": "string"
                                                    },
                                                    "country": {
                                                        "type": "string"
                                                    },
                                                    "countryCode": {
                                                        "type": "integer"
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            "mkpPartner": {
                                "type": "string"
                            },
                            "shippingCharge": {
                                "type": "number",
                                "chance": {
                                    "floating": {
                                        "min": 0,
                                        "max": 10
                                    }
                                }

                            },
                            "giftwrapCharge": {
                                "enum": [0, 5, 10]
                            }
                        },
                        "required": ["partnerShipmentId", "shippingCharge", "giftwrapCharge", "shipmentId"]
                    },
                    "minItems": 1,
                    "maxItems": 1
                },
                "finalShippingFee": {
                    "type": "number"
                }
            },
            "required": ["ns2:shipment"]
        }
    },
    "required": ["header", "estimatedShippingTax", "lineItemList", "shipmentList", "@"]
}]

var upperBody = {
    "type": "object",
    "properties": {
        "@": {
            "type": "object",
            "properties": {
                "xmlns:SOAP-ENV": {
                    "enum": ["http://schemas.xmlsoap.org/soap/envelope/"]
                },
                "xmlns:xsd": {
                    "enum": ["http://www.w3.org/2001/XMLSchema"]
                },
                "xmlns:xsi": {
                    "enum": ["http://www.w3.org/2001/XMLSchema-instance"]
                }
            },
            "required": ["xmlns:SOAP-ENV", "xmlns:xsd", "xmlns:xsi"]
        },
        "SOAP-ENV:Body": {
            "type": "object",
            "properties": {
                "ns2:prepareOrderResponse": {
                    "type": "object",
                    "properties": {
                        "@": {
                            "type": "object",
                            "properties": {
                                "xmlns:ns2": {
                                    "enum": ["http://www.mst.macys.com/xsd/order"]
                                },
                                "xmlns:ns3": {
                                    "enum": ["http://www.macys.com/enterprise_services"]
                                },
                                "xmlns:ns4": {
                                    "enum": ["http://www.macys.com/enterprise_services"]
                                }
                            },
                            "required": ["xmlns:ns2", "xmlns:ns3", "xmlns:ns4"]
                        },
                        "header": {
                            "type": "object",
                            "id": "urn:jsonschema:com:macys:platform:providers:jaxb:ordertotal:OrderHeader",
                            "properties": {
                                "referringId": {
                                    "enum": [271, 272]
                                },
                                "orderId": {
                                    "type": "integer",
                                    "minimum": 100
                                },
                                "partnerOrderId": {
                                    "type": "string",
                                    "faker": "random.number",
                                    "minimum": 100,
                                    "description": "Order Reservation Number"
                                },
                                "clientId": {
                                    "enum": ["MCOM"]
                                },
                                "subclientId": {
                                    "enum": ["ESend_SNS", "ESend_POS", "MMEW", "MSA", "Site", "BMEW", "iShop_iPhone", "iShop_Android", "iShop_Unknown", "Site_Tablet", "loop_commerce", "COSMIC_CART", "group_gifting", "Vanguard", "Unknown", "pinterest", "WSSG", "shopstyle", "BorderFree_MMEW", "BorderFree_Site", "BorderFree_Site_Tablet", "BorderFree_BMEW"]
                                }
                            },
                            "required": ["subclientId", "partnerOrderId", "orderId", "clientId", "referringId"]
                        },
                        "prepareSequenceNumber": {
                            "type": "integer"
                        },
                        "estimatedShippingTax": {
                            "type": "number",
                            "chance": {
                                "floating": {
                                    "min": 0,
                                    "max": 10
                                }
                            }
                        },
                        "lineItemList": {
                            "type": "object",
                            "id": "urn:jsonschema:com:macys:platform:providers:jaxb:ordertotal:PrepareOrderResponse:LineItemList",
                            "properties": {
                                "ns2:lineItem": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "id": "urn:jsonschema:com:macys:platform:providers:jaxb:ordertotal:LineItem",
                                        "properties": {
                                            "partnerLineId": {
                                                "type": "integer",
                                                "minimum": 1,
                                                "maximum": 10
                                            },
                                            "partnerShipmentId": {
                                                "type": "integer",
                                                "minimum": 1,
                                                "maximum": 10
                                            },
                                            "adjustedQuantity": {
                                                "type": "integer",
                                                "minimum": 1,
                                                "maximum": 3
                                            },
                                            "fdIndicator": {
                                                "type": "string",
                                                "chance": {
                                                    "string": {
                                                        "length": 0
                                                    }
                                                }
                                            },
                                            "item": {
                                                "type": "object",
                                                "id": "urn:jsonschema:com:macys:platform:providers:jaxb:ordertotal:Item",
                                                "properties": {
                                                    "upc": {
                                                        "type": "integer",
                                                        "minimum": 5242
                                                    },
                                                    "categoryDescription": {
                                                        "type": "string",
                                                        "faker": "commerce.department"
                                                    },
                                                    "productDescription": {
                                                        "type": "string",
                                                        "faker": "commerce.productName"
                                                    },
                                                    "isGiftwrapAvailable": {
                                                        "type": "boolean"
                                                    },
                                                    "isGiftMessageSupported": {
                                                        "type": "boolean"
                                                    },
                                                    "isClearanceItem": {
                                                        "type": "boolean"
                                                    },
                                                    "isSameSKUUPCNumber": {
                                                        "type": "boolean"
                                                    }
                                                },
                                                "required": ["upc", "isGiftwrapAvailable", "isGiftMessageSupported"]
                                            },
                                            "fulfillmentInfo": {
                                                "type": "object",
                                                "id": "urn:jsonschema:com:macys:platform:providers:jaxb:ordertotal:FulfillmentInfo",
                                                "properties": {
                                                    "orderMethod": {
                                                        "enum": ["POOL"]
                                                    },
                                                    "fillDivisionNumber": {
                                                        "type": "integer",
                                                        "minimum": 1,
                                                        "maximum": 100
                                                    },
                                                    "fillStoreNumber": {
                                                        "type": "integer",
                                                        "minimum": 1,
                                                        "maximum": 1000
                                                    },
                                                    "dropshipDeliveryMethod": {
                                                        "type": "string"
                                                    },
                                                    "dropshipVendorNumber": {
                                                        "type": "integer"
                                                    },
                                                    "itemReturnCode": {
                                                        "type": "string"
                                                    }
                                                },
                                                "required": ["orderMethod", "fillDivisionNumber", "fillStoreNumber", "itemReturnCode"]
                                            },
                                            "shipRep": {
                                                "type": "array",
                                                "items": {
                                                    "type": "object",
                                                    "id": "urn:jsonschema:com:macys:platform:providers:jaxb:ordertotal:ShipRep",
                                                    "properties": {
                                                        "orderMethod": {
                                                            "enum": ["POOL"]
                                                        },
                                                        "deliveryType": {
                                                            "type": "string",
                                                            "faker": "random.number",
                                                            "minimum": 1,
                                                            "maximum": 100
                                                        },
                                                        "shipDate": {
                                                            "type": "string",
                                                            "chance": {
                                                                "date": {
                                                                    "string": true,
                                                                    "american": true
                                                                }
                                                            }
                                                        },
                                                        "shipTime": {
                                                            "type": "string"
                                                        },
                                                        "shipDays": {
                                                            "type": "integer",
                                                            "minimum": 1,
                                                            "maximum": 100
                                                        },
                                                        "shipDaysIndicator": {
                                                            "enum": ["C"]
                                                        }
                                                    },
                                                    "required": ["orderMethod", "deliveryType", "shipDate", "shipDays", "shipDaysIndicator"]
                                                },
                                                "minItems": 1,
                                                "maxItems": 1
                                            },
                                            "deliveryDetails": {
                                                "type": "array",
                                                "items": {
                                                    "type": "object",
                                                    "id": "urn:jsonschema:com:macys:platform:providers:jaxb:ordertotal:DeliveryDetails",
                                                    "properties": {
                                                        "estArrivalDate": {
                                                            "type": "string",
                                                            "chance": {
                                                                "date": {
                                                                    "string": true,
                                                                    "american": true
                                                                }
                                                            }
                                                        },
                                                        "deliveryDays": {
                                                            "type": "integer",
                                                            "minimum": 1,
                                                            "maximum": 100
                                                        },
                                                        "deliveryInd": {
                                                            "enum": ["C"]
                                                        },
                                                        "deliveryType": {
                                                            "type": "string"
                                                        }
                                                    },
                                                    "required": ["estArrivalDate", "deliveryDays", "deliveryInd", "deliveryType"]
                                                },
                                                "minItems": 1,
                                                "maxItems": 1
                                            }
                                        },
                                        "required": ["partnerLineId", "partnerShipmentId", "adjustedQuantity", "fdIndicator", "item", "fulfillmentInfo", "shipRep", "deliveryDetails"]
                                    },
                                    "minItems": 1,
                                    "maxItems": 2
                                }
                            },
                            "required": ["ns2:lineItem"]
                        },
                        "shipmentList": {
                            "type": "object",
                            "id": "urn:jsonschema:com:macys:platform:providers:jaxb:ordertotal:PrepareOrderResponse:ShipmentList",
                            "properties": {
                                "ns2:shipment": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "id": "urn:jsonschema:com:macys:platform:providers:jaxb:ordertotal:Shipment",
                                        "properties": {
                                            "partnerShipmentId": {
                                                "type": "string",
                                                "faker": "random.number",
                                                "minimum": 1,
                                                "maximum": 10
                                            },
                                            "shipmentId": {
                                                "type": "integer",
                                                "minimum": 1,
                                                "maximum": 10
                                            },
                                            "mkpDetails": {
                                                "type": "object",
                                                "id": "urn:jsonschema:com:macys:platform:providers:jaxb:ordertotal:MkpDetailsType",
                                                "properties": {
                                                    "mkpReservationDesc": {
                                                        "type": "string"
                                                    },
                                                    "mkpReservationID": {
                                                        "type": "integer"
                                                    },
                                                    "mkpEventType": {
                                                        "type": "string"
                                                    },
                                                    "mkpEstimatedShipDate": {
                                                        "type": "string"
                                                    },
                                                    "mkpEstimatedReturnDate": {
                                                        "type": "string"
                                                    },
                                                    "mkpEstimatedDeliveryDate": {
                                                        "type": "string"
                                                    },
                                                    "mkpRenterToFirstName": {
                                                        "type": "string"
                                                    },
                                                    "mkpRenterToLastName": {
                                                        "type": "string"
                                                    },
                                                    "mkpEventDate": {
                                                        "type": "string"
                                                    },
                                                    "mkpImageUrl": {
                                                        "type": "string"
                                                    },
                                                    "mkpUpcPDPUrl": {
                                                        "type": "string"
                                                    },
                                                    "mkpWarehouseAddress": {
                                                        "type": "object",
                                                        "id": "urn:jsonschema:com:macys:platform:providers:jaxb:ordertotal:MkpWarehouseAddress",
                                                        "properties": {
                                                            "address": {
                                                                "type": "object",
                                                                "id": "urn:jsonschema:com:macys:platform:providers:jaxb:ordertotal:Address",
                                                                "properties": {
                                                                    "line1": {
                                                                        "type": "string"
                                                                    },
                                                                    "line2": {
                                                                        "type": "string"
                                                                    },
                                                                    "line3": {
                                                                        "type": "string"
                                                                    },
                                                                    "city": {
                                                                        "type": "string"
                                                                    },
                                                                    "state": {
                                                                        "type": "string"
                                                                    },
                                                                    "zipCode": {
                                                                        "type": "string"
                                                                    },
                                                                    "country": {
                                                                        "type": "string"
                                                                    },
                                                                    "countryCode": {
                                                                        "type": "integer"
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            "mkpPartner": {
                                                "type": "string"
                                            },
                                            "shippingCharge": {
                                                "type": "number",
                                                "chance": {
                                                    "floating": {
                                                        "min": 0,
                                                        "max": 10
                                                    }
                                                }

                                            },
                                            "giftwrapCharge": {
                                                "enum": [0, 5, 10]
                                            }
                                        },
                                        "required": ["partnerShipmentId", "shippingCharge", "giftwrapCharge", "shipmentId"]
                                    },
                                    "minItems": 1,
                                    "maxItems": 1
                                },
                                "finalShippingFee": {
                                    "type": "number"
                                }
                            },
                            "required": ["ns2:shipment"]
                        }
                    },
                    "required": ["header", "estimatedShippingTax", "lineItemList", "shipmentList", "@"]
                }
            },
            "required": ["ns2:prepareOrderResponse"]
        }
    },
    "required": ["SOAP-ENV:Body", "@"]
}


console.log(jsf(upperBody));
console.log(js2xmlparser.parse("SOAP-ENV:Envelope", jsf(upperBody)));
