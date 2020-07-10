// tslint:disable
/**
 * Pokemon example
 * The Pokemon API description
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as globalImportUrl from 'url';
import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface Pokemon
 */
export interface Pokemon {
    /**
     * 
     * @type {string}
     * @memberof Pokemon
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Pokemon
     */
    url: string;
}
/**
 * 
 * @export
 * @interface PokemonResponse
 */
export interface PokemonResponse {
    /**
     * 
     * @type {Array<Pokemon>}
     * @memberof PokemonResponse
     */
    pokemon: Array<Pokemon>;
}

/**
 * PokemonApi - axios parameter creator
 * @export
 */
export const PokemonApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pokemonControllerGetAllPokemon: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/pokemon`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pokemonControllerGetPokemonById: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling pokemonControllerGetPokemonById.');
            }
            const localVarPath = `/pokemon/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PokemonApi - functional programming interface
 * @export
 */
export const PokemonApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pokemonControllerGetAllPokemon(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PokemonResponse>> {
            const localVarAxiosArgs = await PokemonApiAxiosParamCreator(configuration).pokemonControllerGetAllPokemon(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pokemonControllerGetPokemonById(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PokemonResponse>> {
            const localVarAxiosArgs = await PokemonApiAxiosParamCreator(configuration).pokemonControllerGetPokemonById(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * PokemonApi - factory interface
 * @export
 */
export const PokemonApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pokemonControllerGetAllPokemon(options?: any): AxiosPromise<PokemonResponse> {
            return PokemonApiFp(configuration).pokemonControllerGetAllPokemon(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pokemonControllerGetPokemonById(id: string, options?: any): AxiosPromise<PokemonResponse> {
            return PokemonApiFp(configuration).pokemonControllerGetPokemonById(id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PokemonApi - object-oriented interface
 * @export
 * @class PokemonApi
 * @extends {BaseAPI}
 */
export class PokemonApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PokemonApi
     */
    public pokemonControllerGetAllPokemon(options?: any) {
        return PokemonApiFp(this.configuration).pokemonControllerGetAllPokemon(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PokemonApi
     */
    public pokemonControllerGetPokemonById(id: string, options?: any) {
        return PokemonApiFp(this.configuration).pokemonControllerGetPokemonById(id, options).then((request) => request(this.axios, this.basePath));
    }

}


