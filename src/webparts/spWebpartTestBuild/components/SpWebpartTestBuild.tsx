import * as React from 'react';
import styles from './SpWebpartTestBuild.module.scss';
import { ISpWebpartTestBuildProps } from './ISpWebpartTestBuildProps';
import { escape } from '@microsoft/sp-lodash-subset';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';

import Header from './common/GreetingLabel'
import GifContainer from './GifContainer'

export default class SpWebpartTestBuild extends React.Component<ISpWebpartTestBuildProps, {}> {
  public render(): React.ReactElement<ISpWebpartTestBuildProps> {

		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <div className={ styles.spWebpartTestBuild }>
        <div className={ styles.container }>
          <Provider store={store}>
						<div>
							<Header title="Welcome to Allain's Webpart!" />
							<GifContainer />
						</div>
					</Provider>
				</div>
      </div>
    );
  }
}
