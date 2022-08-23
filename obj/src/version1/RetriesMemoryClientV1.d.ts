import { FilterParams } from "pip-services3-commons-nodex";
import { PagingParams } from "pip-services3-commons-nodex";
import { DataPage } from "pip-services3-commons-nodex";
import { IRetriesClientV1 } from "./IRetriesClientV1";
import { RetryV1 } from "./RetryV1";
export declare class RetriesMemoryClientV1 implements IRetriesClientV1 {
    private _maxPageSize;
    private _items;
    private readonly _defaultTTL;
    constructor(...items: RetryV1[]);
    private composeFilter;
    private createRetries;
    addRetry(correlationId: string, group: string, id: string, timeToLive: number): Promise<RetryV1>;
    addRetries(correlationId: string, group: string, ids: string[], timeToLive: number): Promise<RetryV1[]>;
    getRetryById(correlationId: string, group: string, id: string): Promise<RetryV1>;
    getRetryByIds(correlationId: string, group: string, ids: string[]): Promise<RetryV1[]>;
    deleteRetry(correlationId: string, group: string, id: string): Promise<void>;
    getGroupNames(correlationId: string): Promise<string[]>;
    getRetries(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<RetryV1>>;
    private createRetry;
    private updateRetry;
}
