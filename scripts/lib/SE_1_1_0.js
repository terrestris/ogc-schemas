var SE_1_1_0_Module_Factory = function () {
  var SE_1_1_0 = {
    n: 'SE_1_1_0',
    dens: 'http:\/\/www.opengis.net\/se',
    deps: ['Filter_1_1_0', 'XLink_1_0'],
    tis: [{
        ln: 'FunctionType',
        bti: 'Filter_1_1_0.ExpressionType',
        ps: [{
            n: 'fallbackValue',
            an: {
              lp: 'fallbackValue'
            },
            t: 'a'
          }]
      }, {
        ln: 'FillType',
        ps: [{
            n: 'graphicFill',
            en: 'GraphicFill',
            ti: '.GraphicFillType'
          }, {
            n: 'svgParameter',
            col: true,
            en: 'SvgParameter',
            ti: '.SvgParameterType'
          }]
      }, {
        ln: 'ColorMapType',
        ps: [{
            n: 'categorize',
            en: 'Categorize',
            ti: '.CategorizeType'
          }, {
            n: 'interpolate',
            en: 'Interpolate',
            ti: '.InterpolateType'
          }]
      }, {
        ln: 'ContrastEnhancementType',
        ps: [{
            n: 'normalize',
            en: 'Normalize',
            ti: '.NormalizeType'
          }, {
            n: 'histogram',
            en: 'Histogram',
            ti: '.HistogramType'
          }, {
            n: 'gammaValue',
            en: 'GammaValue',
            ti: 'Double'
          }]
      }, {
        ln: 'GraphicType',
        ps: [{
            n: 'externalGraphicOrMark',
            col: true,
            etis: [{
                en: 'ExternalGraphic',
                ti: '.ExternalGraphicType'
              }, {
                en: 'Mark',
                ti: '.MarkType'
              }],
            t: 'es'
          }, {
            n: 'opacity',
            en: 'Opacity',
            ti: '.ParameterValueType'
          }, {
            n: 'size',
            en: 'Size',
            ti: '.ParameterValueType'
          }, {
            n: 'rotation',
            en: 'Rotation',
            ti: '.ParameterValueType'
          }, {
            n: 'anchorPoint',
            en: 'AnchorPoint',
            ti: '.AnchorPointType'
          }, {
            n: 'displacement',
            en: 'Displacement',
            ti: '.DisplacementType'
          }]
      }, {
        ln: 'PointSymbolizerType',
        bti: '.SymbolizerType',
        ps: [{
            n: 'geometry',
            en: 'Geometry',
            ti: '.GeometryType'
          }, {
            n: 'graphic',
            en: 'Graphic',
            ti: '.GraphicType'
          }]
      }, {
        ln: 'MarkType',
        ps: [{
            n: 'wellKnownName',
            en: 'WellKnownName'
          }, {
            n: 'onlineResource',
            en: 'OnlineResource',
            ti: '.OnlineResourceType'
          }, {
            n: 'inlineContent',
            en: 'InlineContent',
            ti: '.InlineContentType'
          }, {
            n: 'format',
            en: 'Format'
          }, {
            n: 'markIndex',
            en: 'MarkIndex',
            ti: 'Integer'
          }, {
            n: 'fill',
            en: 'Fill',
            ti: '.FillType'
          }, {
            n: 'stroke',
            en: 'Stroke',
            ti: '.StrokeType'
          }]
      }, {
        ln: 'CategorizeType',
        bti: '.FunctionType',
        ps: [{
            n: 'lookupValue',
            en: 'LookupValue',
            ti: '.ParameterValueType'
          }, {
            n: 'value',
            en: 'Value',
            ti: '.ParameterValueType'
          }, {
            n: 'thresholdAndValue',
            col: true,
            mx: false,
            dom: false,
            etis: [{
                en: 'Threshold',
                ti: '.ParameterValueType'
              }, {
                en: 'Value',
                ti: '.ParameterValueType'
              }],
            t: 'ers'
          }, {
            n: 'threshholdsBelongTo',
            an: {
              lp: 'threshholdsBelongTo'
            },
            t: 'a'
          }]
      }, {
        ln: 'LineSymbolizerType',
        bti: '.SymbolizerType',
        ps: [{
            n: 'geometry',
            en: 'Geometry',
            ti: '.GeometryType'
          }, {
            n: 'stroke',
            en: 'Stroke',
            ti: '.StrokeType'
          }, {
            n: 'perpendicularOffset',
            en: 'PerpendicularOffset',
            ti: '.ParameterValueType'
          }]
      }, {
        ln: 'SelectedChannelType',
        ps: [{
            n: 'sourceChannelName',
            en: 'SourceChannelName'
          }, {
            n: 'contrastEnhancement',
            en: 'ContrastEnhancement',
            ti: '.ContrastEnhancementType'
          }]
      }, {
        ln: 'HistogramType'
      }, {
        ln: 'PointPlacementType',
        ps: [{
            n: 'anchorPoint',
            en: 'AnchorPoint',
            ti: '.AnchorPointType'
          }, {
            n: 'displacement',
            en: 'Displacement',
            ti: '.DisplacementType'
          }, {
            n: 'rotation',
            en: 'Rotation',
            ti: '.ParameterValueType'
          }]
      }, {
        ln: 'StringPositionType',
        bti: '.FunctionType',
        ps: [{
            n: 'lookupString',
            en: 'LookupString',
            ti: '.ParameterValueType'
          }, {
            n: 'stringValue',
            en: 'StringValue',
            ti: '.ParameterValueType'
          }, {
            n: 'searchDirection',
            an: {
              lp: 'searchDirection'
            },
            t: 'a'
          }]
      }, {
        ln: 'ParameterValueType',
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            en: {
              lp: 'expression',
              ns: 'http:\/\/www.opengis.net\/ogc'
            },
            ti: 'Filter_1_1_0.ExpressionType',
            t: 'er'
          }]
      }, {
        ln: 'InterpolateType',
        bti: '.FunctionType',
        ps: [{
            n: 'lookupValue',
            en: 'LookupValue',
            ti: '.ParameterValueType'
          }, {
            n: 'interpolationPoint',
            col: true,
            en: 'InterpolationPoint',
            ti: '.InterpolationPointType'
          }, {
            n: 'mode',
            an: {
              lp: 'mode'
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
        ln: 'DisplacementType',
        ps: [{
            n: 'displacementX',
            en: 'DisplacementX',
            ti: '.ParameterValueType'
          }, {
            n: 'displacementY',
            en: 'DisplacementY',
            ti: '.ParameterValueType'
          }]
      }, {
        ln: 'NormalizeType'
      }, {
        ln: 'SubstringType',
        bti: '.FunctionType',
        ps: [{
            n: 'stringValue',
            en: 'StringValue',
            ti: '.ParameterValueType'
          }, {
            n: 'position',
            en: 'Position',
            ti: '.ParameterValueType'
          }, {
            n: 'length',
            en: 'Length',
            ti: '.ParameterValueType'
          }]
      }, {
        ln: 'TrimType',
        bti: '.FunctionType',
        ps: [{
            n: 'stringValue',
            en: 'StringValue',
            ti: '.ParameterValueType'
          }, {
            n: 'stripOffPosition',
            an: {
              lp: 'stripOffPosition'
            },
            t: 'a'
          }, {
            n: 'stripOffChar',
            an: {
              lp: 'stripOffChar'
            },
            t: 'a'
          }]
      }, {
        ln: 'TextSymbolizerType',
        bti: '.SymbolizerType',
        ps: [{
            n: 'geometry',
            en: 'Geometry',
            ti: '.GeometryType'
          }, {
            n: 'label',
            en: 'Label',
            ti: '.ParameterValueType'
          }, {
            n: 'font',
            en: 'Font',
            ti: '.FontType'
          }, {
            n: 'labelPlacement',
            en: 'LabelPlacement',
            ti: '.LabelPlacementType'
          }, {
            n: 'halo',
            en: 'Halo',
            ti: '.HaloType'
          }, {
            n: 'fill',
            en: 'Fill',
            ti: '.FillType'
          }]
      }, {
        ln: 'FormatDateType',
        bti: '.FunctionType',
        ps: [{
            n: 'dateValue',
            en: 'DateValue',
            ti: '.ParameterValueType'
          }, {
            n: 'pattern',
            en: 'Pattern'
          }]
      }, {
        ln: 'HaloType',
        ps: [{
            n: 'radius',
            en: 'Radius',
            ti: '.ParameterValueType'
          }, {
            n: 'fill',
            en: 'Fill',
            ti: '.FillType'
          }]
      }, {
        ln: 'RuleType',
        ps: [{
            n: 'name',
            en: 'Name'
          }, {
            n: 'description',
            en: 'Description',
            ti: '.DescriptionType'
          }, {
            n: 'legendGraphic',
            en: 'LegendGraphic',
            ti: '.LegendGraphicType'
          }, {
            n: 'filter',
            en: {
              lp: 'Filter',
              ns: 'http:\/\/www.opengis.net\/ogc'
            },
            ti: 'Filter_1_1_0.FilterType'
          }, {
            n: 'elseFilter',
            en: 'ElseFilter',
            ti: '.ElseFilterType'
          }, {
            n: 'minScaleDenominator',
            en: 'MinScaleDenominator',
            ti: 'Double'
          }, {
            n: 'maxScaleDenominator',
            en: 'MaxScaleDenominator',
            ti: 'Double'
          }, {
            n: 'symbolizer',
            col: true,
            mx: false,
            dom: false,
            en: 'Symbolizer',
            ti: '.SymbolizerType',
            t: 'er'
          }]
      }, {
        ln: 'ElseFilterType'
      }, {
        ln: 'ExternalGraphicType',
        ps: [{
            n: 'onlineResource',
            en: 'OnlineResource',
            ti: '.OnlineResourceType'
          }, {
            n: 'inlineContent',
            en: 'InlineContent',
            ti: '.InlineContentType'
          }, {
            n: 'format',
            en: 'Format'
          }, {
            n: 'colorReplacement',
            col: true,
            en: 'ColorReplacement',
            ti: '.ColorReplacementType'
          }]
      }, {
        ln: 'BaseSymbolizerType',
        ps: [{
            n: 'onlineResource',
            en: 'OnlineResource',
            ti: '.OnlineResourceType'
          }]
      }, {
        ln: 'SymbolizerType',
        ps: [{
            n: 'name',
            en: 'Name'
          }, {
            n: 'description',
            en: 'Description',
            ti: '.DescriptionType'
          }, {
            n: 'baseSymbolizer',
            en: 'BaseSymbolizer',
            ti: '.BaseSymbolizerType'
          }, {
            n: 'version',
            an: {
              lp: 'version'
            },
            t: 'a'
          }, {
            n: 'uom',
            an: {
              lp: 'uom'
            },
            t: 'a'
          }]
      }, {
        ln: 'LinePlacementType',
        ps: [{
            n: 'perpendicularOffset',
            en: 'PerpendicularOffset',
            ti: '.ParameterValueType'
          }, {
            n: 'isRepeated',
            en: 'IsRepeated',
            ti: 'Boolean'
          }, {
            n: 'initialGap',
            en: 'InitialGap',
            ti: '.ParameterValueType'
          }, {
            n: 'gap',
            en: 'Gap',
            ti: '.ParameterValueType'
          }, {
            n: 'isAligned',
            en: 'IsAligned',
            ti: 'Boolean'
          }, {
            n: 'generalizeLine',
            en: 'GeneralizeLine',
            ti: 'Boolean'
          }]
      }, {
        ln: 'StringLengthType',
        bti: '.FunctionType',
        ps: [{
            n: 'stringValue',
            en: 'StringValue',
            ti: '.ParameterValueType'
          }]
      }, {
        ln: 'StrokeType',
        ps: [{
            n: 'graphicFill',
            en: 'GraphicFill',
            ti: '.GraphicFillType'
          }, {
            n: 'graphicStroke',
            en: 'GraphicStroke',
            ti: '.GraphicStrokeType'
          }, {
            n: 'svgParameter',
            col: true,
            en: 'SvgParameter',
            ti: '.SvgParameterType'
          }]
      }, {
        ln: 'ChangeCaseType',
        bti: '.FunctionType',
        ps: [{
            n: 'stringValue',
            en: 'StringValue',
            ti: '.ParameterValueType'
          }, {
            n: 'direction',
            an: {
              lp: 'direction'
            },
            t: 'a'
          }]
      }, {
        ln: 'OnlineResourceType',
        ps: [{
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            an: {
              lp: 'type',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'href',
            an: {
              lp: 'href',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'role',
            an: {
              lp: 'role',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'arcrole',
            an: {
              lp: 'arcrole',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'title',
            an: {
              lp: 'title',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            an: {
              lp: 'show',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            an: {
              lp: 'actuate',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }]
      }, {
        ln: 'ShadedReliefType',
        ps: [{
            n: 'brightnessOnly',
            en: 'BrightnessOnly',
            ti: 'Boolean'
          }, {
            n: 'reliefFactor',
            en: 'ReliefFactor',
            ti: 'Double'
          }]
      }, {
        ln: 'LabelPlacementType',
        ps: [{
            n: 'pointPlacement',
            en: 'PointPlacement',
            ti: '.PointPlacementType'
          }, {
            n: 'linePlacement',
            en: 'LinePlacement',
            ti: '.LinePlacementType'
          }]
      }, {
        ln: 'FormatNumberType',
        bti: '.FunctionType',
        ps: [{
            n: 'numericValue',
            en: 'NumericValue',
            ti: '.ParameterValueType'
          }, {
            n: 'pattern',
            en: 'Pattern'
          }, {
            n: 'negativePattern',
            en: 'NegativePattern'
          }, {
            n: 'decimalPoint',
            an: {
              lp: 'decimalPoint'
            },
            t: 'a'
          }, {
            n: 'groupingSeparator',
            an: {
              lp: 'groupingSeparator'
            },
            t: 'a'
          }]
      }, {
        ln: 'FontType',
        ps: [{
            n: 'svgParameter',
            col: true,
            en: 'SvgParameter',
            ti: '.SvgParameterType'
          }]
      }, {
        ln: 'ConcatenateType',
        bti: '.FunctionType',
        ps: [{
            n: 'stringValue',
            col: true,
            en: 'StringValue',
            ti: '.ParameterValueType'
          }]
      }, {
        ln: 'RecodeType',
        bti: '.FunctionType',
        ps: [{
            n: 'lookupValue',
            en: 'LookupValue',
            ti: '.ParameterValueType'
          }, {
            n: 'mapItem',
            col: true,
            en: 'MapItem',
            ti: '.MapItemType'
          }]
      }, {
        ln: 'GraphicFillType',
        ps: [{
            n: 'graphic',
            en: 'Graphic',
            ti: '.GraphicType'
          }]
      }, {
        ln: 'FeatureTypeStyleType',
        ps: [{
            n: 'name',
            en: 'Name'
          }, {
            n: 'description',
            en: 'Description',
            ti: '.DescriptionType'
          }, {
            n: 'featureTypeName',
            en: 'FeatureTypeName',
            ti: 'QName'
          }, {
            n: 'semanticTypeIdentifier',
            col: true,
            en: 'SemanticTypeIdentifier'
          }, {
            n: 'ruleOrOnlineResource',
            col: true,
            etis: [{
                en: 'Rule',
                ti: '.RuleType'
              }, {
                en: 'OnlineResource',
                ti: '.OnlineResourceType'
              }],
            t: 'es'
          }, {
            n: 'version',
            an: {
              lp: 'version'
            },
            t: 'a'
          }]
      }, {
        ln: 'SvgParameterType',
        bti: '.ParameterValueType',
        ps: [{
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'InlineContentType',
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            t: 'ae'
          }, {
            n: 'encoding',
            an: {
              lp: 'encoding'
            },
            t: 'a'
          }]
      }, {
        ln: 'CoverageStyleType',
        ps: [{
            n: 'name',
            en: 'Name'
          }, {
            n: 'description',
            en: 'Description',
            ti: '.DescriptionType'
          }, {
            n: 'coverageName',
            en: 'CoverageName'
          }, {
            n: 'semanticTypeIdentifier',
            col: true,
            en: 'SemanticTypeIdentifier'
          }, {
            n: 'ruleOrOnlineResource',
            col: true,
            etis: [{
                en: 'Rule',
                ti: '.RuleType'
              }, {
                en: 'OnlineResource',
                ti: '.OnlineResourceType'
              }],
            t: 'es'
          }, {
            n: 'version',
            an: {
              lp: 'version'
            },
            t: 'a'
          }]
      }, {
        ln: 'GeometryType',
        ps: [{
            n: 'propertyName',
            en: {
              lp: 'PropertyName',
              ns: 'http:\/\/www.opengis.net\/ogc'
            },
            ti: 'Filter_1_1_0.PropertyNameType'
          }]
      }, {
        ln: 'MapItemType',
        bti: 'Filter_1_1_0.ExpressionType',
        ps: [{
            n: 'data',
            en: 'Data',
            ti: 'Double'
          }, {
            n: 'value',
            en: 'Value',
            ti: '.ParameterValueType'
          }]
      }, {
        ln: 'ChannelSelectionType',
        ps: [{
            n: 'redChannel',
            en: 'RedChannel',
            ti: '.SelectedChannelType'
          }, {
            n: 'greenChannel',
            en: 'GreenChannel',
            ti: '.SelectedChannelType'
          }, {
            n: 'blueChannel',
            en: 'BlueChannel',
            ti: '.SelectedChannelType'
          }, {
            n: 'grayChannel',
            en: 'GrayChannel',
            ti: '.SelectedChannelType'
          }]
      }, {
        ln: 'DescriptionType',
        ps: [{
            n: 'title',
            en: 'Title'
          }, {
            n: '_abstract',
            en: 'Abstract'
          }]
      }, {
        ln: 'LegendGraphicType',
        ps: [{
            n: 'graphic',
            en: 'Graphic',
            ti: '.GraphicType'
          }]
      }, {
        ln: 'PolygonSymbolizerType',
        bti: '.SymbolizerType',
        ps: [{
            n: 'geometry',
            en: 'Geometry',
            ti: '.GeometryType'
          }, {
            n: 'fill',
            en: 'Fill',
            ti: '.FillType'
          }, {
            n: 'stroke',
            en: 'Stroke',
            ti: '.StrokeType'
          }, {
            n: 'displacement',
            en: 'Displacement',
            ti: '.DisplacementType'
          }, {
            n: 'perpendicularOffset',
            en: 'PerpendicularOffset',
            ti: '.ParameterValueType'
          }]
      }, {
        ln: 'RasterSymbolizerType',
        bti: '.SymbolizerType',
        ps: [{
            n: 'geometry',
            en: 'Geometry',
            ti: '.GeometryType'
          }, {
            n: 'opacity',
            en: 'Opacity',
            ti: '.ParameterValueType'
          }, {
            n: 'channelSelection',
            en: 'ChannelSelection',
            ti: '.ChannelSelectionType'
          }, {
            n: 'overlapBehavior',
            en: 'OverlapBehavior'
          }, {
            n: 'colorMap',
            en: 'ColorMap',
            ti: '.ColorMapType'
          }, {
            n: 'contrastEnhancement',
            en: 'ContrastEnhancement',
            ti: '.ContrastEnhancementType'
          }, {
            n: 'shadedRelief',
            en: 'ShadedRelief',
            ti: '.ShadedReliefType'
          }, {
            n: 'imageOutline',
            en: 'ImageOutline',
            ti: '.ImageOutlineType'
          }]
      }, {
        ln: 'ColorReplacementType',
        ps: [{
            n: 'recode',
            en: 'Recode',
            ti: '.RecodeType'
          }]
      }, {
        ln: 'ImageOutlineType',
        ps: [{
            n: 'lineSymbolizer',
            en: 'LineSymbolizer',
            ti: '.LineSymbolizerType'
          }, {
            n: 'polygonSymbolizer',
            en: 'PolygonSymbolizer',
            ti: '.PolygonSymbolizerType'
          }]
      }, {
        ln: 'AnchorPointType',
        ps: [{
            n: 'anchorPointX',
            en: 'AnchorPointX',
            ti: '.ParameterValueType'
          }, {
            n: 'anchorPointY',
            en: 'AnchorPointY',
            ti: '.ParameterValueType'
          }]
      }, {
        ln: 'InterpolationPointType',
        bti: 'Filter_1_1_0.ExpressionType',
        ps: [{
            n: 'data',
            en: 'Data',
            ti: 'Double'
          }, {
            n: 'value',
            en: 'Value',
            ti: '.ParameterValueType'
          }]
      }, {
        ln: 'GraphicStrokeType',
        ps: [{
            n: 'graphic',
            en: 'Graphic',
            ti: '.GraphicType'
          }, {
            n: 'initialGap',
            en: 'InitialGap',
            ti: '.ParameterValueType'
          }, {
            n: 'gap',
            en: 'Gap',
            ti: '.ParameterValueType'
          }]
      }, {
        t: 'enum',
        ln: 'SearchDirectionType',
        vs: ['frontToBack', 'backToFront']
      }, {
        t: 'enum',
        ln: 'VersionType',
        vs: ['1.1.0']
      }, {
        t: 'enum',
        ln: 'ModeType',
        vs: ['linear', 'cosine', 'cubic']
      }, {
        t: 'enum',
        ln: 'StripOffPositionType',
        vs: ['leading', 'trailing', 'both']
      }, {
        t: 'enum',
        ln: 'DirectionType',
        vs: ['toUpper', 'toLower']
      }, {
        t: 'enum',
        ln: 'ThreshholdsBelongToType',
        vs: ['succeeding', 'preceding']
      }, {
        t: 'enum',
        ln: 'MethodType',
        vs: ['numeric', 'color']
      }],
    eis: [{
        en: 'Geometry',
        ti: '.GeometryType'
      }, {
        en: 'ChannelSelection',
        ti: '.ChannelSelectionType'
      }, {
        en: 'LegendGraphic',
        ti: '.LegendGraphicType'
      }, {
        en: 'ImageOutline',
        ti: '.ImageOutlineType'
      }, {
        en: 'RedChannel',
        ti: '.SelectedChannelType'
      }, {
        en: 'GraphicFill',
        ti: '.GraphicFillType'
      }, {
        en: 'ContrastEnhancement',
        ti: '.ContrastEnhancementType'
      }, {
        en: 'GammaValue',
        ti: 'Double'
      }, {
        en: 'IsAligned',
        ti: 'Boolean'
      }, {
        en: 'GrayChannel',
        ti: '.SelectedChannelType'
      }, {
        en: 'Fill',
        ti: '.FillType'
      }, {
        en: 'DisplacementX',
        ti: '.ParameterValueType'
      }, {
        en: 'Description',
        ti: '.DescriptionType'
      }, {
        en: 'Label',
        ti: '.ParameterValueType'
      }, {
        en: 'SourceChannelName'
      }, {
        en: 'Interpolate',
        ti: '.InterpolateType',
        sh: 'Function'
      }, {
        en: 'StringLength',
        ti: '.StringLengthType',
        sh: 'Function'
      }, {
        en: 'PolygonSymbolizer',
        ti: '.PolygonSymbolizerType',
        sh: 'Symbolizer'
      }, {
        en: 'Mark',
        ti: '.MarkType'
      }, {
        en: 'SemanticTypeIdentifier'
      }, {
        en: 'ColorReplacement',
        ti: '.ColorReplacementType'
      }, {
        en: 'Opacity',
        ti: '.ParameterValueType'
      }, {
        en: 'Value',
        ti: '.ParameterValueType'
      }, {
        en: 'Pattern'
      }, {
        en: 'WellKnownName'
      }, {
        en: 'Function',
        ti: '.FunctionType',
        sh: {
          lp: 'expression',
          ns: 'http:\/\/www.opengis.net\/ogc'
        }
      }, {
        en: 'Position',
        ti: '.ParameterValueType'
      }, {
        en: 'FormatDate',
        ti: '.FormatDateType',
        sh: 'Function'
      }, {
        en: 'ElseFilter',
        ti: '.ElseFilterType'
      }, {
        en: 'Displacement',
        ti: '.DisplacementType'
      }, {
        en: 'Rotation',
        ti: '.ParameterValueType'
      }, {
        en: 'Gap',
        ti: '.ParameterValueType'
      }, {
        en: 'LookupString',
        ti: '.ParameterValueType'
      }, {
        en: 'PerpendicularOffset',
        ti: '.ParameterValueType'
      }, {
        en: 'Trim',
        ti: '.TrimType',
        sh: 'Function'
      }, {
        en: 'Symbolizer',
        ti: '.SymbolizerType'
      }, {
        en: 'Recode',
        ti: '.RecodeType',
        sh: 'Function'
      }, {
        en: 'OnlineResource',
        ti: '.OnlineResourceType'
      }, {
        en: 'NumericValue',
        ti: '.ParameterValueType'
      }, {
        en: 'BrightnessOnly',
        ti: 'Boolean'
      }, {
        en: 'GeneralizeLine',
        ti: 'Boolean'
      }, {
        en: 'ColorMap',
        ti: '.ColorMapType'
      }, {
        en: 'FeatureTypeName',
        ti: 'QName'
      }, {
        en: 'PointSymbolizer',
        ti: '.PointSymbolizerType',
        sh: 'Symbolizer'
      }, {
        en: 'CoverageName'
      }, {
        en: 'InitialGap',
        ti: '.ParameterValueType'
      }, {
        en: 'AnchorPoint',
        ti: '.AnchorPointType'
      }, {
        en: 'BlueChannel',
        ti: '.SelectedChannelType'
      }, {
        en: 'MaxScaleDenominator',
        ti: 'Double'
      }, {
        en: 'InterpolationPoint',
        ti: '.InterpolationPointType',
        sh: {
          lp: 'expression',
          ns: 'http:\/\/www.opengis.net\/ogc'
        }
      }, {
        en: 'Normalize',
        ti: '.NormalizeType'
      }, {
        en: 'Data',
        ti: 'Double'
      }, {
        en: 'StringPosition',
        ti: '.StringPositionType',
        sh: 'Function'
      }, {
        en: 'ChangeCase',
        ti: '.ChangeCaseType',
        sh: 'Function'
      }, {
        en: 'Stroke',
        ti: '.StrokeType'
      }, {
        en: 'Format'
      }, {
        en: 'AnchorPointY',
        ti: '.ParameterValueType'
      }, {
        en: 'ExternalGraphic',
        ti: '.ExternalGraphicType'
      }, {
        en: 'TextSymbolizer',
        ti: '.TextSymbolizerType',
        sh: 'Symbolizer'
      }, {
        en: 'GreenChannel',
        ti: '.SelectedChannelType'
      }, {
        en: 'Name'
      }, {
        en: 'ShadedRelief',
        ti: '.ShadedReliefType'
      }, {
        en: 'NegativePattern'
      }, {
        en: 'Length',
        ti: '.ParameterValueType'
      }, {
        en: 'InlineContent',
        ti: '.InlineContentType'
      }, {
        en: 'IsRepeated',
        ti: 'Boolean'
      }, {
        en: 'SvgParameter',
        ti: '.SvgParameterType'
      }, {
        en: 'CoverageStyle',
        ti: '.CoverageStyleType'
      }, {
        en: 'Concatenate',
        ti: '.ConcatenateType',
        sh: 'Function'
      }, {
        en: 'BaseSymbolizer',
        ti: '.BaseSymbolizerType'
      }, {
        en: 'GraphicStroke',
        ti: '.GraphicStrokeType'
      }, {
        en: 'Size',
        ti: '.ParameterValueType'
      }, {
        en: 'Substring',
        ti: '.SubstringType',
        sh: 'Function'
      }, {
        en: 'AnchorPointX',
        ti: '.ParameterValueType'
      }, {
        en: 'LookupValue',
        ti: '.ParameterValueType'
      }, {
        en: 'Rule',
        ti: '.RuleType'
      }, {
        en: 'Threshold',
        ti: '.ParameterValueType'
      }, {
        en: 'ReliefFactor',
        ti: 'Double'
      }, {
        en: 'Histogram',
        ti: '.HistogramType'
      }, {
        en: 'MapItem',
        ti: '.MapItemType',
        sh: {
          lp: 'expression',
          ns: 'http:\/\/www.opengis.net\/ogc'
        }
      }, {
        en: 'LabelPlacement',
        ti: '.LabelPlacementType'
      }, {
        en: 'Font',
        ti: '.FontType'
      }, {
        en: 'Halo',
        ti: '.HaloType'
      }, {
        en: 'Radius',
        ti: '.ParameterValueType'
      }, {
        en: 'RasterSymbolizer',
        ti: '.RasterSymbolizerType',
        sh: 'Symbolizer'
      }, {
        en: 'LineSymbolizer',
        ti: '.LineSymbolizerType',
        sh: 'Symbolizer'
      }, {
        en: 'Graphic',
        ti: '.GraphicType'
      }, {
        en: 'FormatNumber',
        ti: '.FormatNumberType',
        sh: 'Function'
      }, {
        en: 'MarkIndex',
        ti: 'Integer'
      }, {
        en: 'FeatureTypeStyle',
        ti: '.FeatureTypeStyleType'
      }, {
        en: 'DisplacementY',
        ti: '.ParameterValueType'
      }, {
        en: 'OverlapBehavior'
      }, {
        en: 'Categorize',
        ti: '.CategorizeType',
        sh: 'Function'
      }, {
        en: 'LinePlacement',
        ti: '.LinePlacementType'
      }, {
        en: 'StringValue',
        ti: '.ParameterValueType'
      }, {
        en: 'PointPlacement',
        ti: '.PointPlacementType'
      }, {
        en: 'DateValue',
        ti: '.ParameterValueType'
      }, {
        en: 'MinScaleDenominator',
        ti: 'Double'
      }]
  };
  return {
    SE_1_1_0: SE_1_1_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], SE_1_1_0_Module_Factory);
}
else {
  var SE_1_1_0_Module = SE_1_1_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.SE_1_1_0 = SE_1_1_0_Module.SE_1_1_0;
  }
  else {
    var SE_1_1_0 = SE_1_1_0_Module.SE_1_1_0;
  }
}