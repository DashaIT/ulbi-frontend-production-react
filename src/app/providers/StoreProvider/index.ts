import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';
import {
    StateSchema,
    ReduxStoreWithManager,
    ThunkExtraArg,
    ThunkConfig,
    StateSchemaKey,
} from './config/StateSchema';

export { StoreProvider, createReduxStore };

export type {
    AppDispatch,
    StateSchema,
    ReduxStoreWithManager,
    ThunkExtraArg,
    ThunkConfig,
    StateSchemaKey,
};
