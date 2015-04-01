var WAMI_1_0_0_Module_Factory = function () {
  var WAMI_1_0_0 = {
    n: 'WAMI_1_0_0',
    dens: 'http:\/\/www.pixia.com\/wami',
    deps: ['OWS_2_0'],
    tis: [{
        ln: 'ISPathMapInfoType',
        bti: '.ISAbstractMapInfoType'
      }, {
        ln: 'ExtendedMetadataSection',
        ps: [{
            n: 'abstractMetaData',
            col: true,
            mx: false,
            dom: false,
            typed: false,
            en: {
              lp: 'AbstractMetaData',
              ns: 'http:\/\/www.opengis.net\/ows\/2.0'
            },
            ti: 'AnyType',
            t: 'er'
          }, {
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'CSCollectionCountType',
        bti: '.AbstractResponseType',
        ps: [{
            n: 'description',
            en: 'Description'
          }, {
            n: 'root',
            ti: 'Boolean',
            an: {
              lp: 'root'
            },
            t: 'a'
          }, {
            n: 'depth',
            ti: 'Integer',
            an: {
              lp: 'depth'
            },
            t: 'a'
          }, {
            n: 'nid',
            an: {
              lp: 'NID'
            },
            t: 'a'
          }, {
            n: 'childNodes',
            ti: 'Integer',
            an: {
              lp: 'childNodes'
            },
            t: 'a'
          }, {
            n: 'totalNodes',
            ti: 'Integer',
            an: {
              lp: 'totalNodes'
            },
            t: 'a'
          }, {
            n: 'collections',
            ti: 'Integer',
            an: {
              lp: 'collections'
            },
            t: 'a'
          }, {
            n: 'edgeDepth',
            ti: 'Integer',
            an: {
              lp: 'edgeDepth'
            },
            t: 'a'
          }]
      }, {
        ln: 'ISInfoType',
        bti: '.AbstractResponseType',
        ps: [{
            n: 'metadata',
            en: 'Metadata',
            ti: '.CollectionMetadataSectionsType'
          }]
      }, {
        ln: 'PathMapTrackAoiType',
        ps: [{
            n: 'bBox',
            en: 'BBox',
            ti: '.BoundBoxType'
          }, {
            n: 'time',
            en: 'Time',
            ti: '.FrameOrTimeRequestType'
          }, {
            n: 'timeSpan',
            en: 'TimeSpan',
            ti: '.FrameOrTimeSpanRequestType'
          }, {
            n: 'option',
            col: true,
            en: 'Option',
            ti: '.NameValuePairType'
          }]
      }, {
        ln: 'PathMapType',
        ps: [{
            n: 'track',
            col: true,
            en: 'Track',
            ti: '.PathMapTrackType'
          }]
      }, {
        ln: 'BoundingPolygonType',
        ps: [{
            n: 'value',
            ti: {
              t: 'l',
              bti: 'Double'
            },
            t: 'v'
          }, {
            n: 'crs',
            an: {
              lp: 'crs'
            },
            t: 'a'
          }]
      }, {
        ln: 'VSGetPathMapVideoRequestType',
        bti: '.BinaryAbstractGetMapRequestType',
        ps: [{
            n: 'path',
            en: 'Path',
            ti: '.PathMapType'
          }, {
            n: 'styles',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'styles'
            },
            t: 'a'
          }, {
            n: 'bgcolor',
            an: {
              lp: 'bgcolor'
            },
            t: 'a'
          }, {
            n: 'transparent',
            ti: 'Boolean',
            an: {
              lp: 'transparent'
            },
            t: 'a'
          }, {
            n: 'dup',
            ti: 'Integer',
            an: {
              lp: 'dup'
            },
            t: 'a'
          }]
      }, {
        ln: 'ISGetPathMapRequestType',
        bti: '.BinaryAbstractGetMapRequestType',
        ps: [{
            n: 'path',
            en: 'Path',
            ti: '.PathMapType'
          }, {
            n: 'disposition',
            an: {
              lp: 'disposition'
            },
            t: 'a'
          }, {
            n: 'styles',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'styles'
            },
            t: 'a'
          }, {
            n: 'bgcolor',
            an: {
              lp: 'bgcolor'
            },
            t: 'a'
          }, {
            n: 'transparent',
            ti: 'Boolean',
            an: {
              lp: 'transparent'
            },
            t: 'a'
          }]
      }, {
        ln: 'CommonAbstractRequestType',
        ps: [{
            n: 'service',
            an: {
              lp: 'service'
            },
            t: 'a'
          }, {
            n: 'request',
            an: {
              lp: 'request'
            },
            t: 'a'
          }, {
            n: 'exceptions',
            an: {
              lp: 'exceptions'
            },
            t: 'a'
          }, {
            n: 'acceptLanguages',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'acceptLanguages'
            },
            t: 'a'
          }]
      }, {
        ln: 'FrameOrTimeRequestType',
        ps: [{
            n: 'frame',
            ti: 'Integer',
            an: {
              lp: 'frame'
            },
            t: 'a'
          }, {
            n: 'time',
            ti: 'Calendar',
            an: {
              lp: 'time'
            },
            t: 'a'
          }]
      }, {
        ln: 'GetHelpRequestType',
        bti: '.AbstractRequestType',
        ps: [{
            n: 'topic',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'topic'
            },
            t: 'a'
          }]
      }, {
        ln: 'DimensionType',
        ps: [{
            n: 'width',
            ti: 'Integer',
            an: {
              lp: 'width'
            },
            t: 'a'
          }, {
            n: 'height',
            ti: 'Integer',
            an: {
              lp: 'height'
            },
            t: 'a'
          }]
      }, {
        ln: 'MetadataGroupType',
        ps: [{
            n: 'attribute',
            col: true,
            en: 'Attribute',
            ti: '.NameValuePairType'
          }, {
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'RequestMethodLinkType',
        bti: 'OWS_2_0.RequestMethodType',
        ps: [{
            n: 'get',
            ti: 'Boolean',
            an: {
              lp: 'get'
            },
            t: 'a'
          }, {
            n: 'post',
            ti: 'Boolean',
            an: {
              lp: 'post'
            },
            t: 'a'
          }]
      }, {
        ln: 'GeoBoxSectionType',
        ps: [{
            n: 'boundingBox',
            col: true,
            en: 'BoundingBox',
            ti: '.BoundBoxType'
          }, {
            n: 'nativeCRS',
            an: {
              lp: 'nativeCRS'
            },
            t: 'a'
          }]
      }, {
        ln: 'FrameOrTimeRangeRequestType.FrameRange',
        ps: [{
            n: 'start',
            ti: 'Integer',
            an: {
              lp: 'start'
            },
            t: 'a'
          }, {
            n: 'end',
            ti: 'Integer',
            an: {
              lp: 'end'
            },
            t: 'a'
          }, {
            n: 'step',
            ti: 'Integer',
            an: {
              lp: 'step'
            },
            t: 'a'
          }]
      }, {
        ln: 'CollectionMetadataSectionsType',
        ps: [{
            n: 'collection',
            en: 'Collection',
            ti: '.CollectionSectionType'
          }, {
            n: 'geoBox',
            en: 'GeoBox',
            ti: '.GeoBoxSectionType'
          }, {
            n: 'toa',
            en: 'TOA',
            ti: 'Calendar'
          }, {
            n: 'frameNum',
            en: 'FrameNum',
            ti: 'Integer'
          }, {
            n: 'file',
            en: 'File',
            ti: '.FileSectionType'
          }, {
            n: 'group',
            col: true,
            en: 'Group',
            ti: '.MetadataGroupType'
          }, {
            n: 'extendedMetadataSection',
            col: true,
            en: 'ExtendedMetadataSection',
            ti: '.ExtendedMetadataSection'
          }]
      }, {
        ln: 'ServiceElementType',
        ps: [{
            n: 'request',
            col: true,
            en: 'Request',
            ti: '.RequestMethodLinkType'
          }]
      }, {
        ln: 'FrameOrTimeRangeRequestType.TimeRange',
        ps: [{
            n: 'start',
            ti: 'Calendar',
            an: {
              lp: 'start'
            },
            t: 'a'
          }, {
            n: 'end',
            ti: 'Calendar',
            an: {
              lp: 'end'
            },
            t: 'a'
          }, {
            n: 'step',
            ti: 'Double',
            an: {
              lp: 'step'
            },
            t: 'a'
          }]
      }, {
        ln: 'ISGetPathMapInfoRequestType',
        bti: '.CommonAbstractGetMapRequestType',
        ps: [{
            n: 'path',
            en: 'Path',
            ti: '.PathMapType'
          }]
      }, {
        ln: 'PostContentTypeMetaData.XML',
        ps: [{
            n: 'schemaElement',
            an: {
              lp: 'schemaElement'
            },
            t: 'a'
          }]
      }, {
        ln: 'AbstractResponseType',
        ps: [{
            n: 'lang',
            an: {
              lp: 'lang'
            },
            t: 'a'
          }, {
            n: 'version',
            an: {
              lp: 'version'
            },
            t: 'a'
          }]
      }, {
        ln: 'MultipartImageRootDocumentType',
        ps: [{
            n: 'reference',
            col: true,
            en: 'Reference',
            ti: '.MultipartImageRootDocumentType.Reference'
          }]
      }, {
        ln: 'PostContentTypeMetaData.KVP'
      }, {
        ln: 'CSGetCollectionCountRequestType',
        bti: '.AbstractRequestType',
        ps: [{
            n: 'nid',
            an: {
              lp: 'NID'
            },
            t: 'a'
          }, {
            n: 'depth',
            an: {
              lp: 'depth'
            },
            t: 'a'
          }]
      }, {
        ln: 'AbstractRequestType',
        bti: '.CommonAbstractRequestType',
        ps: [{
            n: 'version',
            an: {
              lp: 'version'
            },
            t: 'a'
          }, {
            n: 'format',
            an: {
              lp: 'format'
            },
            t: 'a'
          }]
      }, {
        ln: 'MultipartImageRootDocumentType.Reference',
        ps: [{
            n: 'imageReference',
            an: {
              lp: 'imageReference'
            },
            t: 'a'
          }, {
            n: 'metadataReference',
            an: {
              lp: 'metadataReference'
            },
            t: 'a'
          }]
      }, {
        ln: 'GetCapabilitiesRequestType',
        bti: '.CommonAbstractRequestType',
        ps: [{
            n: 'acceptVersions',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'acceptVersions'
            },
            t: 'a'
          }, {
            n: 'acceptFormats',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'acceptFormats'
            },
            t: 'a'
          }, {
            n: 'sections',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'sections'
            },
            t: 'a'
          }, {
            n: 'updateSequence',
            an: {
              lp: 'updateSequence'
            },
            t: 'a'
          }]
      }, {
        ln: 'GeoTransformType',
        ps: [{
            n: 'xOffset',
            ti: 'Double',
            an: {
              lp: 'xOffset'
            },
            t: 'a'
          }, {
            n: 'yOffset',
            ti: 'Double',
            an: {
              lp: 'yOffset'
            },
            t: 'a'
          }, {
            n: 'xScale',
            ti: 'Double',
            an: {
              lp: 'xScale'
            },
            t: 'a'
          }, {
            n: 'yScale',
            ti: 'Double',
            an: {
              lp: 'yScale'
            },
            t: 'a'
          }, {
            n: 'xSkew',
            ti: 'Double',
            an: {
              lp: 'xSkew'
            },
            t: 'a'
          }, {
            n: 'ySkew',
            ti: 'Double',
            an: {
              lp: 'ySkew'
            },
            t: 'a'
          }]
      }, {
        ln: 'NamedServiceElementType',
        bti: '.ServiceElementType',
        ps: [{
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'CSGetCollectionsRequestType',
        bti: '.AbstractRequestType',
        ps: [{
            n: 'nid',
            an: {
              lp: 'NID'
            },
            t: 'a'
          }, {
            n: 'depth',
            an: {
              lp: 'depth'
            },
            t: 'a'
          }, {
            n: 'metadata',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'metadata'
            },
            t: 'a'
          }]
      }, {
        ln: 'NameValuePairType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            col: true,
            typed: false,
            t: 'ae'
          }, {
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'CSNodeType',
        ps: [{
            n: 'description',
            en: 'Description'
          }, {
            n: 'service',
            col: true,
            en: 'Service',
            ti: '.NamedServiceElementType'
          }, {
            n: 'metadata',
            en: 'Metadata',
            ti: '.CollectionMetadataSectionsType'
          }, {
            n: 'node',
            col: true,
            en: 'Node',
            ti: '.CSNodeType'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: 'parentNID',
            an: {
              lp: 'parentNID'
            },
            t: 'a'
          }, {
            n: 'nid',
            an: {
              lp: 'NID'
            },
            t: 'a'
          }, {
            n: 'cid',
            an: {
              lp: 'CID'
            },
            t: 'a'
          }]
      }, {
        ln: 'VSGetMapVideoRequestType',
        bti: '.BinaryAbstractGetMapRequestType',
        ps: [{
            n: 'bBox',
            en: 'BBox',
            ti: '.BoundBoxType'
          }, {
            n: 'time',
            en: 'Time',
            ti: '.FrameOrTimeRangeRequestType'
          }, {
            n: 'cid',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'CID'
            },
            t: 'a'
          }, {
            n: 'styles',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'styles'
            },
            t: 'a'
          }, {
            n: 'bgcolor',
            an: {
              lp: 'bgcolor'
            },
            t: 'a'
          }, {
            n: 'transparent',
            ti: 'Boolean',
            an: {
              lp: 'transparent'
            },
            t: 'a'
          }, {
            n: 'dup',
            ti: 'Integer',
            an: {
              lp: 'dup'
            },
            t: 'a'
          }]
      }, {
        ln: 'FileSectionType',
        ps: [{
            n: 'geoTransform',
            en: 'GeoTransform',
            ti: '.GeoTransformType'
          }, {
            n: 'wkt',
            en: 'WKT'
          }, {
            n: 'boundingPolygon',
            col: true,
            en: 'BoundingPolygon',
            ti: '.BoundingPolygonType'
          }, {
            n: 'fileName',
            an: {
              lp: 'fileName'
            },
            t: 'a'
          }, {
            n: 'fileSize',
            ti: 'Integer',
            an: {
              lp: 'fileSize'
            },
            t: 'a'
          }, {
            n: 'createTime',
            ti: 'Calendar',
            an: {
              lp: 'createTime'
            },
            t: 'a'
          }, {
            n: 'modifyTime',
            ti: 'Calendar',
            an: {
              lp: 'modifyTime'
            },
            t: 'a'
          }, {
            n: 'pixelWidth',
            ti: 'Integer',
            an: {
              lp: 'pixelWidth'
            },
            t: 'a'
          }, {
            n: 'pixelHeight',
            ti: 'Integer',
            an: {
              lp: 'pixelHeight'
            },
            t: 'a'
          }, {
            n: 'fileFormat',
            an: {
              lp: 'fileFormat'
            },
            t: 'a'
          }, {
            n: 'bands',
            ti: 'Integer',
            an: {
              lp: 'bands'
            },
            t: 'a'
          }, {
            n: 'bitsPerBand',
            ti: 'Integer',
            an: {
              lp: 'bitsPerBand'
            },
            t: 'a'
          }, {
            n: 'bandDataType',
            an: {
              lp: 'bandDataType'
            },
            t: 'a'
          }]
      }, {
        ln: 'ISGetMapRequestType',
        bti: '.BinaryAbstractGetMapRequestType',
        ps: [{
            n: 'bBox',
            en: 'BBox',
            ti: '.BoundBoxType'
          }, {
            n: 'time',
            en: 'Time',
            ti: '.FrameOrTimeRangeRequestType'
          }, {
            n: 'cid',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'CID'
            },
            t: 'a'
          }, {
            n: 'disposition',
            an: {
              lp: 'disposition'
            },
            t: 'a'
          }, {
            n: 'styles',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'styles'
            },
            t: 'a'
          }, {
            n: 'bgcolor',
            an: {
              lp: 'bgcolor'
            },
            t: 'a'
          }, {
            n: 'transparent',
            ti: 'Boolean',
            an: {
              lp: 'transparent'
            },
            t: 'a'
          }]
      }, {
        ln: 'CapabilitiesResponseBaseType',
        ps: [{
            n: 'serviceIdentification',
            en: {
              lp: 'ServiceIdentification',
              ns: 'http:\/\/www.opengis.net\/ows\/2.0'
            },
            ti: 'OWS_2_0.ServiceIdentification'
          }, {
            n: 'serviceProvider',
            en: {
              lp: 'ServiceProvider',
              ns: 'http:\/\/www.opengis.net\/ows\/2.0'
            },
            ti: 'OWS_2_0.ServiceProvider'
          }, {
            n: 'operationsMetadata',
            en: {
              lp: 'OperationsMetadata',
              ns: 'http:\/\/www.opengis.net\/ows\/2.0'
            },
            ti: 'OWS_2_0.OperationsMetadata'
          }, {
            n: 'language',
            col: true,
            en: 'Language'
          }, {
            n: 'updateSequence',
            an: {
              lp: 'updateSequence'
            },
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang'
            },
            t: 'a'
          }, {
            n: 'version',
            an: {
              lp: 'version'
            },
            t: 'a'
          }]
      }, {
        ln: 'HelpResponseType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            col: true,
            typed: false,
            t: 'ae'
          }, {
            n: 'service',
            an: {
              lp: 'service'
            },
            t: 'a'
          }, {
            n: 'request',
            an: {
              lp: 'request'
            },
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang'
            },
            t: 'a'
          }, {
            n: 'version',
            an: {
              lp: 'version'
            },
            t: 'a'
          }]
      }, {
        ln: 'ISPathMapType',
        bti: '.MultipartImageRootDocumentType'
      }, {
        ln: 'CollectionSectionType',
        ps: [{
            n: 'startFrame',
            ti: 'Integer',
            an: {
              lp: 'startFrame'
            },
            t: 'a'
          }, {
            n: 'endFrame',
            ti: 'Integer',
            an: {
              lp: 'endFrame'
            },
            t: 'a'
          }, {
            n: 'frameCount',
            ti: 'Integer',
            an: {
              lp: 'frameCount'
            },
            t: 'a'
          }, {
            n: 'startTime',
            ti: 'Calendar',
            an: {
              lp: 'startTime'
            },
            t: 'a'
          }, {
            n: 'endTime',
            ti: 'Calendar',
            an: {
              lp: 'endTime'
            },
            t: 'a'
          }, {
            n: 'timeSpan',
            ti: 'Double',
            an: {
              lp: 'timeSpan'
            },
            t: 'a'
          }, {
            n: 'frameInterval',
            ti: 'Double',
            an: {
              lp: 'frameInterval'
            },
            t: 'a'
          }, {
            n: 'frameJitter',
            ti: 'Double',
            an: {
              lp: 'frameJitter'
            },
            t: 'a'
          }]
      }, {
        ln: 'CSCollectionsType.Parent',
        ps: [{
            n: 'service',
            en: 'Service',
            ti: '.NamedServiceElementType'
          }, {
            n: 'nid',
            an: {
              lp: 'NID'
            },
            t: 'a'
          }]
      }, {
        ln: 'ISAbstractMapInfoType',
        bti: '.AbstractResponseType',
        ps: [{
            n: 'metadata',
            col: true,
            en: 'Metadata',
            ti: '.CollectionMetadataSectionsType'
          }]
      }, {
        ln: 'ISMapType',
        bti: '.MultipartImageRootDocumentType'
      }, {
        ln: 'ISMapInfoType',
        bti: '.ISAbstractMapInfoType'
      }, {
        ln: 'PathMapTrackType',
        ps: [{
            n: 'aoi',
            col: true,
            en: 'Aoi',
            ti: '.PathMapTrackAoiType'
          }, {
            n: 'cid',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'CID'
            },
            t: 'a'
          }, {
            n: 'method',
            an: {
              lp: 'method'
            },
            t: 'a'
          }]
      }, {
        ln: 'PostContentTypeMetaData',
        ps: [{
            n: 'kvp',
            en: 'KVP',
            ti: '.PostContentTypeMetaData.KVP'
          }, {
            n: 'xml',
            en: 'XML',
            ti: '.PostContentTypeMetaData.XML'
          }]
      }, {
        ln: 'CSCollectionsType',
        bti: '.AbstractResponseType',
        ps: [{
            n: 'description',
            en: 'Description'
          }, {
            n: 'parent',
            en: 'Parent',
            ti: '.CSCollectionsType.Parent'
          }, {
            n: 'node',
            en: 'Node',
            ti: '.CSNodeType'
          }]
      }, {
        ln: 'FrameOrTimeRangeRequestType',
        ps: [{
            n: 'frameRange',
            en: 'FrameRange',
            ti: '.FrameOrTimeRangeRequestType.FrameRange'
          }, {
            n: 'timeRange',
            en: 'TimeRange',
            ti: '.FrameOrTimeRangeRequestType.TimeRange'
          }, {
            n: 'frame',
            ti: 'Integer',
            an: {
              lp: 'frame'
            },
            t: 'a'
          }, {
            n: 'time',
            ti: 'Calendar',
            an: {
              lp: 'time'
            },
            t: 'a'
          }]
      }, {
        ln: 'CommonAbstractGetMapRequestType',
        bti: '.AbstractRequestType',
        ps: [{
            n: 'option',
            col: true,
            en: 'Option',
            ti: '.NameValuePairType'
          }, {
            n: 'crs',
            an: {
              lp: 'crs'
            },
            t: 'a'
          }, {
            n: 'metadata',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'metadata'
            },
            t: 'a'
          }]
      }, {
        ln: 'BoundBoxType',
        ps: [{
            n: 'crs',
            an: {
              lp: 'crs'
            },
            t: 'a'
          }, {
            n: 'minx',
            ti: 'Double',
            an: {
              lp: 'minx'
            },
            t: 'a'
          }, {
            n: 'miny',
            ti: 'Double',
            an: {
              lp: 'miny'
            },
            t: 'a'
          }, {
            n: 'maxx',
            ti: 'Double',
            an: {
              lp: 'maxx'
            },
            t: 'a'
          }, {
            n: 'maxy',
            ti: 'Double',
            an: {
              lp: 'maxy'
            },
            t: 'a'
          }, {
            n: 'resx',
            ti: 'Double',
            an: {
              lp: 'resx'
            },
            t: 'a'
          }, {
            n: 'resy',
            ti: 'Double',
            an: {
              lp: 'resy'
            },
            t: 'a'
          }]
      }, {
        ln: 'BinaryAbstractGetMapRequestType',
        bti: '.CommonAbstractGetMapRequestType',
        ps: [{
            n: 'viewPort',
            en: 'ViewPort',
            ti: '.DimensionType'
          }]
      }, {
        ln: 'ISGetMapInfoRequestType',
        bti: '.CommonAbstractGetMapRequestType',
        ps: [{
            n: 'bBox',
            en: 'BBox',
            ti: '.BoundBoxType'
          }, {
            n: 'time',
            en: 'Time',
            ti: '.FrameOrTimeRangeRequestType'
          }, {
            n: 'cid',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'CID'
            },
            t: 'a'
          }]
      }, {
        ln: 'FrameOrTimeSpanRequestType',
        ps: [{
            n: 'frames',
            ti: 'Integer',
            an: {
              lp: 'frames'
            },
            t: 'a'
          }, {
            n: 'duration',
            ti: 'Double',
            an: {
              lp: 'duration'
            },
            t: 'a'
          }]
      }, {
        t: 'enum',
        ln: 'ServiceNameType',
        vs: ['CS', 'IS', 'VS', 'QS', 'VCSS', 'VFS']
      }, {
        t: 'enum',
        ln: 'NodeDepthType',
        vs: ['All', '0', '1']
      }, {
        t: 'enum',
        ln: 'ExceptionNameType',
        vs: ['XML', 'IMAGE', 'NONE', 'OTHER']
      }, {
        t: 'enum',
        ln: 'NodeCountDepthType',
        vs: ['All', '1']
      }, {
        t: 'enum',
        ln: 'DispositionType',
        vs: ['ordered', 'unordered', 'replace']
      }],
    eis: [{
        en: 'CS_GetCollectionsRequest',
        ti: '.CSGetCollectionsRequestType'
      }, {
        en: 'VS_GetMapVideoRequest',
        ti: '.VSGetMapVideoRequestType'
      }, {
        en: 'CS_Collections',
        ti: '.CSCollectionsType'
      }, {
        en: 'ExtendedMetadataSection',
        ti: '.ExtendedMetadataSection'
      }, {
        en: 'IS_GetPathMapRequest',
        ti: '.ISGetPathMapRequestType'
      }, {
        en: 'IS_PathMapInfo',
        ti: '.ISPathMapInfoType'
      }, {
        en: 'IS_GetMapInfoRequest',
        ti: '.ISGetMapInfoRequestType'
      }, {
        en: 'GetHelpRequest',
        ti: '.GetHelpRequestType'
      }, {
        en: 'PostContentTypeMetaData',
        ti: '.PostContentTypeMetaData',
        sh: {
          lp: 'AbstractMetaData',
          ns: 'http:\/\/www.opengis.net\/ows\/2.0'
        }
      }, {
        en: 'GetCapabilitiesRequest',
        ti: '.GetCapabilitiesRequestType'
      }, {
        en: 'Capabilities',
        ti: '.CapabilitiesResponseBaseType'
      }, {
        en: 'IS_MapInfo',
        ti: '.ISMapInfoType'
      }, {
        en: 'VS_GetPathMapVideoRequest',
        ti: '.VSGetPathMapVideoRequestType'
      }, {
        en: 'IS_Map',
        ti: '.ISMapType'
      }, {
        en: 'CS_CollectionCount',
        ti: '.CSCollectionCountType'
      }, {
        en: 'IS_PathMap',
        ti: '.ISPathMapType'
      }, {
        en: 'IS_GetPathMapInfoRequest',
        ti: '.ISGetPathMapInfoRequestType'
      }, {
        en: 'Help',
        ti: '.HelpResponseType'
      }, {
        en: 'IS_GetMapRequest',
        ti: '.ISGetMapRequestType'
      }, {
        en: 'CS_GetCollectionCountRequest',
        ti: '.CSGetCollectionCountRequestType'
      }]
  };
  return {
    WAMI_1_0_0: WAMI_1_0_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], WAMI_1_0_0_Module_Factory);
}
else {
  var WAMI_1_0_0_Module = WAMI_1_0_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.WAMI_1_0_0 = WAMI_1_0_0_Module.WAMI_1_0_0;
  }
  else {
    var WAMI_1_0_0 = WAMI_1_0_0_Module.WAMI_1_0_0;
  }
}