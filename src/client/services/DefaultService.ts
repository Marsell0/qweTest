/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_create_upload_file_upload_file__post } from "../models/Body_create_upload_file_upload_file__post";
import type { Body_login_for_access_token_token_post } from "../models/Body_login_for_access_token_token_post";
import type { Body_login_login__post } from "../models/Body_login_login__post";
import type { Payload } from "../models/Payload";
import type { Token } from "../models/Token";
import type { User } from "../models/User";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class DefaultService {
  /**
   * Simple Get
   * @returns any Successful Response
   * @throws ApiError
   */
  public static simpleGetSimpleGetGet(
    api: typeof OpenAPI
  ): CancelablePromise<any> {
    return __request(api, {
      method: "GET",
      url: "/simple_get",
    });
  }

  /**
   * With Query Param
   * @param param
   * @returns any Successful Response
   * @throws ApiError
   */
  public static withQueryParamWithQueryParamParamGet(
    param: number
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/with_query_param/{param}",
      path: {
        param: param,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * With Payload
   * @param requestBody
   * @returns any Successful Response
   * @throws ApiError
   */
  public static withPayloadWithPayloadGet(
    requestBody: Payload
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/with_payload",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Post With Payload
   * @param requestBody
   * @returns any Successful Response
   * @throws ApiError
   */
  public static postWithPayloadpostWithPayloadPost(
    requestBody: Payload
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "post_with_payload",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Login
   * @param formData
   * @returns any Successful Response
   * @throws ApiError
   */
  public static loginLoginPost(
    formData: Body_login_login__post
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/login/",
      formData: formData,
      mediaType: "application/x-www-form-urlencoded",
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Create Upload File
   * @param formData
   * @returns any Successful Response
   * @throws ApiError
   */
  public static createUploadFileUploadFilePost(
    formData: Body_create_upload_file_upload_file__post
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/upload_file/",
      formData: formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Read Users Me
   * @returns User Successful Response
   * @throws ApiError
   */
  public static readUsersMeUsersMeGet(
    api: typeof OpenAPI
  ): CancelablePromise<User> {
    return __request(api, {
      method: "GET",
      url: "/users/me/",
    });
  }

  /**
   * Read Own Items
   * @returns any Successful Response
   * @throws ApiError
   */
  public static readOwnItemsUsersMeItemsGet(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/users/me/items/",
    });
  }

  /**
   * Login For Access Token
   * @param formData
   * @returns Token Successful Response
   * @throws ApiError
   */
  public static loginForAccessTokenTokenPost(
    formData: Body_login_for_access_token_token_post
  ): CancelablePromise<Token> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/token",
      formData: formData,
      mediaType: "application/x-www-form-urlencoded",
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
