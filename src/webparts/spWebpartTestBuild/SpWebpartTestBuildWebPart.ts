import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'SpWebpartTestBuildWebPartStrings';
import SpWebpartTestBuild from './components/SpWebpartTestBuild';
import { ISpWebpartTestBuildProps } from './components/ISpWebpartTestBuildProps';

export interface ISpWebpartTestBuildWebPartProps {
  description: string;
}

export default class SpWebpartTestBuildWebPart extends BaseClientSideWebPart<ISpWebpartTestBuildWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISpWebpartTestBuildProps > = React.createElement(
      SpWebpartTestBuild,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
