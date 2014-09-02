var WFS_1_1_0_Module_Factory = function () {
  var WFS_1_1_0 = {
    name: 'WFS_1_1_0',
    defaultElementNamespaceURI: 'http:\/\/www.opengis.net\/wfs',
    typeInfos: [{
        type: 'classInfo',
        localName: 'DescribeFeatureTypeType',
        baseTypeInfo: 'WFS_1_1_0.BaseRequestType',
        propertyInfos: [{
            type: 'element',
            name: 'typeName',
            collection: true,
            elementName: 'TypeName',
            typeInfo: 'String'
          }, {
            name: 'outputFormat',
            typeInfo: 'String',
            attributeName: 'outputFormat',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'DeleteElementType',
        propertyInfos: [{
            type: 'element',
            name: 'filter',
            elementName: {
              localPart: 'Filter',
              namespaceURI: 'http:\/\/www.opengis.net\/ogc'
            },
            typeInfo: 'Filter_1_1_0.FilterType'
          }, {
            name: 'handle',
            typeInfo: 'String',
            attributeName: 'handle',
            type: 'attribute'
          }, {
            name: 'typeName',
            typeInfo: 'String',
            attributeName: 'typeName',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'GetFeatureType',
        baseTypeInfo: 'WFS_1_1_0.BaseRequestType',
        propertyInfos: [{
            type: 'element',
            name: 'query',
            collection: true,
            elementName: 'Query',
            typeInfo: 'WFS_1_1_0.QueryType'
          }, {
            name: 'resultType',
            typeInfo: 'String',
            attributeName: 'resultType',
            type: 'attribute'
          }, {
            name: 'outputFormat',
            typeInfo: 'String',
            attributeName: 'outputFormat',
            type: 'attribute'
          }, {
            name: 'maxFeatures',
            typeInfo: 'Integer',
            attributeName: 'maxFeatures',
            type: 'attribute'
          }, {
            name: 'traverseXlinkDepth',
            typeInfo: 'String',
            attributeName: 'traverseXlinkDepth',
            type: 'attribute'
          }, {
            name: 'traverseXlinkExpiry',
            typeInfo: 'Integer',
            attributeName: 'traverseXlinkExpiry',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'LockFeatureResponseType',
        propertyInfos: [{
            type: 'element',
            name: 'lockId',
            elementName: 'LockId',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'featuresLocked',
            elementName: 'FeaturesLocked',
            typeInfo: 'WFS_1_1_0.FeaturesLockedType'
          }, {
            type: 'element',
            name: 'featuresNotLocked',
            elementName: 'FeaturesNotLocked',
            typeInfo: 'WFS_1_1_0.FeaturesNotLockedType'
          }]
      }, {
        type: 'classInfo',
        localName: 'QueryType',
        propertyInfos: [{
            name: 'propertyNameOrXlinkPropertyNameOrFunction',
            collection: true,
            elementTypeInfos: [{
                elementName: 'PropertyName',
                typeInfo: 'String'
              }, {
                elementName: 'XlinkPropertyName',
                typeInfo: 'WFS_1_1_0.XlinkPropertyName'
              }, {
                elementName: {
                  localPart: 'Function',
                  namespaceURI: 'http:\/\/www.opengis.net\/ogc'
                },
                typeInfo: 'Filter_1_1_0.FunctionType'
              }],
            type: 'elements'
          }, {
            type: 'element',
            name: 'filter',
            elementName: {
              localPart: 'Filter',
              namespaceURI: 'http:\/\/www.opengis.net\/ogc'
            },
            typeInfo: 'Filter_1_1_0.FilterType'
          }, {
            type: 'element',
            name: 'sortBy',
            elementName: {
              localPart: 'SortBy',
              namespaceURI: 'http:\/\/www.opengis.net\/ogc'
            },
            typeInfo: 'Filter_1_1_0.SortByType'
          }, {
            name: 'handle',
            typeInfo: 'String',
            attributeName: 'handle',
            type: 'attribute'
          }, {
            name: 'typeName',
            typeInfo: {
              type: 'list',
              typeInfo: 'String'
            },
            attributeName: 'typeName',
            type: 'attribute'
          }, {
            name: 'featureVersion',
            typeInfo: 'String',
            attributeName: 'featureVersion',
            type: 'attribute'
          }, {
            name: 'srsName',
            typeInfo: 'String',
            attributeName: 'srsName',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'GetFeatureWithLockType',
        baseTypeInfo: 'WFS_1_1_0.BaseRequestType',
        propertyInfos: [{
            type: 'element',
            name: 'query',
            collection: true,
            elementName: 'Query',
            typeInfo: 'WFS_1_1_0.QueryType'
          }, {
            name: 'expiry',
            typeInfo: 'Integer',
            attributeName: 'expiry',
            type: 'attribute'
          }, {
            name: 'resultType',
            typeInfo: 'String',
            attributeName: 'resultType',
            type: 'attribute'
          }, {
            name: 'outputFormat',
            typeInfo: 'String',
            attributeName: 'outputFormat',
            type: 'attribute'
          }, {
            name: 'maxFeatures',
            typeInfo: 'Integer',
            attributeName: 'maxFeatures',
            type: 'attribute'
          }, {
            name: 'traverseXlinkDepth',
            typeInfo: 'String',
            attributeName: 'traverseXlinkDepth',
            type: 'attribute'
          }, {
            name: 'traverseXlinkExpiry',
            typeInfo: 'Integer',
            attributeName: 'traverseXlinkExpiry',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'GetGmlObjectType',
        baseTypeInfo: 'WFS_1_1_0.BaseRequestType',
        propertyInfos: [{
            type: 'element',
            name: 'gmlObjectId',
            elementName: {
              localPart: 'GmlObjectId',
              namespaceURI: 'http:\/\/www.opengis.net\/ogc'
            },
            typeInfo: 'Filter_1_1_0.GmlObjectIdType'
          }, {
            name: 'outputFormat',
            typeInfo: 'String',
            attributeName: 'outputFormat',
            type: 'attribute'
          }, {
            name: 'traverseXlinkDepth',
            typeInfo: 'String',
            attributeName: 'traverseXlinkDepth',
            type: 'attribute'
          }, {
            name: 'traverseXlinkExpiry',
            typeInfo: 'Integer',
            attributeName: 'traverseXlinkExpiry',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'LockFeatureType',
        baseTypeInfo: 'WFS_1_1_0.BaseRequestType',
        propertyInfos: [{
            type: 'element',
            name: 'lock',
            collection: true,
            elementName: 'Lock',
            typeInfo: 'WFS_1_1_0.LockType'
          }, {
            name: 'expiry',
            typeInfo: 'Integer',
            attributeName: 'expiry',
            type: 'attribute'
          }, {
            name: 'lockAction',
            typeInfo: 'String',
            attributeName: 'lockAction',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'WFSCapabilitiesType',
        baseTypeInfo: 'OWS_1_0_0.CapabilitiesBaseType',
        propertyInfos: [{
            type: 'element',
            name: 'featureTypeList',
            elementName: 'FeatureTypeList',
            typeInfo: 'WFS_1_1_0.FeatureTypeListType'
          }, {
            type: 'element',
            name: 'servesGMLObjectTypeList',
            elementName: 'ServesGMLObjectTypeList',
            typeInfo: 'WFS_1_1_0.GMLObjectTypeListType'
          }, {
            type: 'element',
            name: 'supportsGMLObjectTypeList',
            elementName: 'SupportsGMLObjectTypeList',
            typeInfo: 'WFS_1_1_0.GMLObjectTypeListType'
          }, {
            type: 'element',
            name: 'filterCapabilities',
            elementName: {
              localPart: 'Filter_Capabilities',
              namespaceURI: 'http:\/\/www.opengis.net\/ogc'
            },
            typeInfo: 'Filter_1_1_0.FilterCapabilities'
          }]
      }, {
        type: 'classInfo',
        localName: 'FeatureTypeListType',
        propertyInfos: [{
            type: 'element',
            name: 'operations',
            elementName: 'Operations',
            typeInfo: 'WFS_1_1_0.OperationsType'
          }, {
            type: 'element',
            name: 'featureType',
            collection: true,
            elementName: 'FeatureType',
            typeInfo: 'WFS_1_1_0.FeatureTypeType'
          }]
      }, {
        type: 'classInfo',
        localName: 'XlinkPropertyName',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'String',
            type: 'value'
          }, {
            name: 'traverseXlinkDepth',
            typeInfo: 'String',
            attributeName: 'traverseXlinkDepth',
            type: 'attribute'
          }, {
            name: 'traverseXlinkExpiry',
            typeInfo: 'Integer',
            attributeName: 'traverseXlinkExpiry',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'InsertElementType',
        propertyInfos: [{
            name: 'feature',
            collection: true,
            elementName: {
              localPart: '_Feature',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            typeInfo: 'GML_3_1_1.AbstractFeatureType',
            type: 'elementRef'
          }, {
            name: 'idgen',
            typeInfo: 'String',
            attributeName: 'idgen',
            type: 'attribute'
          }, {
            name: 'handle',
            typeInfo: 'String',
            attributeName: 'handle',
            type: 'attribute'
          }, {
            name: 'inputFormat',
            typeInfo: 'String',
            attributeName: 'inputFormat',
            type: 'attribute'
          }, {
            name: 'srsName',
            typeInfo: 'String',
            attributeName: 'srsName',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'UpdateElementType',
        propertyInfos: [{
            type: 'element',
            name: 'property',
            collection: true,
            elementName: 'Property',
            typeInfo: 'WFS_1_1_0.PropertyType'
          }, {
            type: 'element',
            name: 'filter',
            elementName: {
              localPart: 'Filter',
              namespaceURI: 'http:\/\/www.opengis.net\/ogc'
            },
            typeInfo: 'Filter_1_1_0.FilterType'
          }, {
            name: 'handle',
            typeInfo: 'String',
            attributeName: 'handle',
            type: 'attribute'
          }, {
            name: 'typeName',
            typeInfo: 'String',
            attributeName: 'typeName',
            type: 'attribute'
          }, {
            name: 'inputFormat',
            typeInfo: 'String',
            attributeName: 'inputFormat',
            type: 'attribute'
          }, {
            name: 'srsName',
            typeInfo: 'String',
            attributeName: 'srsName',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'NativeType',
        propertyInfos: [{
            name: 'vendorId',
            typeInfo: 'String',
            attributeName: 'vendorId',
            type: 'attribute'
          }, {
            name: 'safeToIgnore',
            typeInfo: 'Boolean',
            attributeName: 'safeToIgnore',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'TransactionResponseType',
        propertyInfos: [{
            type: 'element',
            name: 'transactionSummary',
            elementName: 'TransactionSummary',
            typeInfo: 'WFS_1_1_0.TransactionSummaryType'
          }, {
            type: 'element',
            name: 'transactionResults',
            elementName: 'TransactionResults',
            typeInfo: 'WFS_1_1_0.TransactionResultsType'
          }, {
            type: 'element',
            name: 'insertResults',
            elementName: 'InsertResults',
            typeInfo: 'WFS_1_1_0.InsertResultsType'
          }, {
            name: 'version',
            typeInfo: 'String',
            attributeName: 'version',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'TransactionType',
        baseTypeInfo: 'WFS_1_1_0.BaseRequestType',
        propertyInfos: [{
            type: 'element',
            name: 'lockId',
            elementName: 'LockId',
            typeInfo: 'String'
          }, {
            name: 'insertOrUpdateOrDelete',
            collection: true,
            elementTypeInfos: [{
                elementName: 'Insert',
                typeInfo: 'WFS_1_1_0.InsertElementType'
              }, {
                elementName: 'Update',
                typeInfo: 'WFS_1_1_0.UpdateElementType'
              }, {
                elementName: 'Delete',
                typeInfo: 'WFS_1_1_0.DeleteElementType'
              }, {
                elementName: 'Native',
                typeInfo: 'WFS_1_1_0.NativeType'
              }],
            type: 'elements'
          }, {
            name: 'releaseAction',
            typeInfo: 'String',
            attributeName: 'releaseAction',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'FeatureCollectionType',
        baseTypeInfo: 'GML_3_1_1.AbstractFeatureCollectionType',
        propertyInfos: [{
            name: 'lockId',
            typeInfo: 'String',
            attributeName: 'lockId',
            type: 'attribute'
          }, {
            name: 'timeStamp',
            typeInfo: 'Calendar',
            attributeName: 'timeStamp',
            type: 'attribute'
          }, {
            name: 'numberOfFeatures',
            typeInfo: 'Integer',
            attributeName: 'numberOfFeatures',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'GetCapabilitiesType',
        baseTypeInfo: 'OWS_1_0_0.GetCapabilitiesType',
        propertyInfos: [{
            name: 'service',
            typeInfo: 'String',
            attributeName: 'service',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'GMLObjectTypeListType',
        propertyInfos: [{
            type: 'element',
            name: 'gmlObjectType',
            collection: true,
            elementName: 'GMLObjectType',
            typeInfo: 'WFS_1_1_0.GMLObjectTypeType'
          }]
      }, {
        type: 'classInfo',
        localName: 'PropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'name',
            elementName: 'Name',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'value',
            elementName: 'Value',
            typeInfo: 'AnyType'
          }]
      }, {
        type: 'classInfo',
        localName: 'ActionType',
        propertyInfos: [{
            type: 'element',
            name: 'message',
            elementName: 'Message',
            typeInfo: 'String'
          }, {
            name: 'locator',
            typeInfo: 'String',
            attributeName: 'locator',
            type: 'attribute'
          }, {
            name: 'code',
            typeInfo: 'String',
            attributeName: 'code',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'FeaturesNotLockedType',
        propertyInfos: [{
            type: 'element',
            name: 'featureId',
            collection: true,
            elementName: {
              localPart: 'FeatureId',
              namespaceURI: 'http:\/\/www.opengis.net\/ogc'
            },
            typeInfo: 'Filter_1_1_0.FeatureIdType'
          }]
      }, {
        type: 'classInfo',
        localName: 'FeaturesLockedType',
        propertyInfos: [{
            type: 'element',
            name: 'featureId',
            collection: true,
            elementName: {
              localPart: 'FeatureId',
              namespaceURI: 'http:\/\/www.opengis.net\/ogc'
            },
            typeInfo: 'Filter_1_1_0.FeatureIdType'
          }]
      }, {
        type: 'classInfo',
        localName: 'TransactionSummaryType',
        propertyInfos: [{
            type: 'element',
            name: 'totalInserted',
            elementName: 'totalInserted',
            typeInfo: 'Integer'
          }, {
            type: 'element',
            name: 'totalUpdated',
            elementName: 'totalUpdated',
            typeInfo: 'Integer'
          }, {
            type: 'element',
            name: 'totalDeleted',
            elementName: 'totalDeleted',
            typeInfo: 'Integer'
          }]
      }, {
        type: 'classInfo',
        localName: 'LockType',
        propertyInfos: [{
            type: 'element',
            name: 'filter',
            elementName: {
              localPart: 'Filter',
              namespaceURI: 'http:\/\/www.opengis.net\/ogc'
            },
            typeInfo: 'Filter_1_1_0.FilterType'
          }, {
            name: 'handle',
            typeInfo: 'String',
            attributeName: 'handle',
            type: 'attribute'
          }, {
            name: 'typeName',
            typeInfo: 'String',
            attributeName: 'typeName',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'OperationsType',
        propertyInfos: [{
            type: 'element',
            name: 'operation',
            collection: true,
            elementName: 'Operation',
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'GMLObjectTypeType',
        propertyInfos: [{
            type: 'element',
            name: 'name',
            elementName: 'Name',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'title',
            elementName: 'Title',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: '_abstract',
            elementName: 'Abstract',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'keywords',
            collection: true,
            elementName: {
              localPart: 'Keywords',
              namespaceURI: 'http:\/\/www.opengis.net\/ows'
            },
            typeInfo: 'OWS_1_0_0.KeywordsType'
          }, {
            type: 'element',
            name: 'outputFormats',
            elementName: 'OutputFormats',
            typeInfo: 'WFS_1_1_0.OutputFormatListType'
          }]
      }, {
        type: 'classInfo',
        localName: 'InsertResultsType',
        propertyInfos: [{
            type: 'element',
            name: 'feature',
            collection: true,
            elementName: 'Feature',
            typeInfo: 'WFS_1_1_0.InsertedFeatureType'
          }]
      }, {
        type: 'classInfo',
        localName: 'MetadataURLType',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'String',
            type: 'value'
          }, {
            name: 'type',
            typeInfo: 'String',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'format',
            typeInfo: 'String',
            attributeName: 'format',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'FeatureTypeType',
        propertyInfos: [{
            type: 'element',
            name: 'name',
            elementName: 'Name',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'title',
            elementName: 'Title',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: '_abstract',
            elementName: 'Abstract',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'keywords',
            collection: true,
            elementName: {
              localPart: 'Keywords',
              namespaceURI: 'http:\/\/www.opengis.net\/ows'
            },
            typeInfo: 'OWS_1_0_0.KeywordsType'
          }, {
            type: 'element',
            name: 'defaultSRS',
            elementName: 'DefaultSRS',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'otherSRS',
            collection: true,
            elementName: 'OtherSRS',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'noSRS',
            elementName: 'NoSRS',
            typeInfo: 'WFS_1_1_0.FeatureTypeType.NoSRS'
          }, {
            type: 'element',
            name: 'operations',
            elementName: 'Operations',
            typeInfo: 'WFS_1_1_0.OperationsType'
          }, {
            type: 'element',
            name: 'outputFormats',
            elementName: 'OutputFormats',
            typeInfo: 'WFS_1_1_0.OutputFormatListType'
          }, {
            type: 'element',
            name: 'wgs84BoundingBox',
            collection: true,
            elementName: {
              localPart: 'WGS84BoundingBox',
              namespaceURI: 'http:\/\/www.opengis.net\/ows'
            },
            typeInfo: 'OWS_1_0_0.WGS84BoundingBoxType'
          }, {
            type: 'element',
            name: 'metadataURL',
            collection: true,
            elementName: 'MetadataURL',
            typeInfo: 'WFS_1_1_0.MetadataURLType'
          }]
      }, {
        type: 'classInfo',
        localName: 'InsertedFeatureType',
        propertyInfos: [{
            type: 'element',
            name: 'featureId',
            collection: true,
            elementName: {
              localPart: 'FeatureId',
              namespaceURI: 'http:\/\/www.opengis.net\/ogc'
            },
            typeInfo: 'Filter_1_1_0.FeatureIdType'
          }, {
            name: 'handle',
            typeInfo: 'String',
            attributeName: 'handle',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'OutputFormatListType',
        propertyInfos: [{
            type: 'element',
            name: 'format',
            collection: true,
            elementName: 'Format',
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'BaseRequestType',
        propertyInfos: [{
            name: 'service',
            typeInfo: 'String',
            attributeName: 'service',
            type: 'attribute'
          }, {
            name: 'version',
            typeInfo: 'String',
            attributeName: 'version',
            type: 'attribute'
          }, {
            name: 'handle',
            typeInfo: 'String',
            attributeName: 'handle',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'TransactionResultsType',
        propertyInfos: [{
            type: 'element',
            name: 'action',
            collection: true,
            elementName: 'Action',
            typeInfo: 'WFS_1_1_0.ActionType'
          }]
      }, {
        type: 'classInfo',
        localName: 'FeatureTypeType.NoSRS',
        propertyInfos: []
      }, {
        type: 'enumInfo',
        localName: 'IdentifierGenerationOptionType',
        baseTypeInfo: 'String',
        values: ['UseExisting', 'ReplaceDuplicate', 'GenerateNew']
      }, {
        type: 'enumInfo',
        localName: 'AllSomeType',
        baseTypeInfo: 'String',
        values: ['ALL', 'SOME']
      }, {
        type: 'enumInfo',
        localName: 'ResultTypeType',
        baseTypeInfo: 'String',
        values: ['results', 'hits']
      }, {
        type: 'enumInfo',
        localName: 'OperationType',
        baseTypeInfo: 'String',
        values: ['Insert', 'Update', 'Delete', 'Query', 'Lock', 'GetGmlObject']
      }],
    elementInfos: [{
        elementName: 'XlinkPropertyName',
        typeInfo: 'WFS_1_1_0.XlinkPropertyName'
      }, {
        elementName: 'GetGmlObject',
        typeInfo: 'WFS_1_1_0.GetGmlObjectType'
      }, {
        elementName: 'GetFeatureWithLock',
        typeInfo: 'WFS_1_1_0.GetFeatureWithLockType'
      }, {
        elementName: 'PropertyName',
        typeInfo: 'String'
      }, {
        elementName: 'GetFeature',
        typeInfo: 'WFS_1_1_0.GetFeatureType'
      }, {
        elementName: 'LockFeatureResponse',
        typeInfo: 'WFS_1_1_0.LockFeatureResponseType'
      }, {
        elementName: 'WFS_Capabilities',
        typeInfo: 'WFS_1_1_0.WFSCapabilitiesType'
      }, {
        elementName: 'FeatureCollection',
        typeInfo: 'WFS_1_1_0.FeatureCollectionType',
        substitutionHead: {
          localPart: '_FeatureCollection',
          namespaceURI: 'http:\/\/www.opengis.net\/gml'
        }
      }, {
        elementName: 'Transaction',
        typeInfo: 'WFS_1_1_0.TransactionType'
      }, {
        elementName: 'LockId',
        typeInfo: 'String'
      }, {
        elementName: 'ServesGMLObjectTypeList',
        typeInfo: 'WFS_1_1_0.GMLObjectTypeListType'
      }, {
        elementName: 'LockFeature',
        typeInfo: 'WFS_1_1_0.LockFeatureType'
      }, {
        elementName: 'Query',
        typeInfo: 'WFS_1_1_0.QueryType'
      }, {
        elementName: 'DescribeFeatureType',
        typeInfo: 'WFS_1_1_0.DescribeFeatureTypeType'
      }, {
        elementName: 'Delete',
        typeInfo: 'WFS_1_1_0.DeleteElementType'
      }, {
        elementName: 'Insert',
        typeInfo: 'WFS_1_1_0.InsertElementType'
      }, {
        elementName: 'Update',
        typeInfo: 'WFS_1_1_0.UpdateElementType'
      }, {
        elementName: 'FeatureTypeList',
        typeInfo: 'WFS_1_1_0.FeatureTypeListType'
      }, {
        elementName: 'GetCapabilities',
        typeInfo: 'WFS_1_1_0.GetCapabilitiesType'
      }, {
        elementName: 'TransactionResponse',
        typeInfo: 'WFS_1_1_0.TransactionResponseType'
      }, {
        elementName: 'Native',
        typeInfo: 'WFS_1_1_0.NativeType'
      }, {
        elementName: 'SupportsGMLObjectTypeList',
        typeInfo: 'WFS_1_1_0.GMLObjectTypeListType'
      }, {
        elementName: 'Property',
        typeInfo: 'WFS_1_1_0.PropertyType'
      }]
  };
  return {
    WFS_1_1_0: WFS_1_1_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], WFS_1_1_0_Module_Factory);
}
else {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.WFS_1_1_0 = WFS_1_1_0_Module_Factory().WFS_1_1_0;
  }
  else {
    var WFS_1_1_0 = WFS_1_1_0_Module_Factory().WFS_1_1_0;
  }
}