import { ODataParser, ODataParserBase } from "./core";
import { Util } from "../utils/util";

export class ODataDefaultParser extends ODataParserBase<any> {
}

class ODataValueParserImpl<T> extends ODataParserBase<T> {
    public parse(r: Response): Promise<T> {
        return super.parse(r).then(d => d as T);
    }
}

export function ODataValue<T>(): ODataParser<T> {
    return new ODataValueParserImpl<T>();
}

export class ODataRawParserImpl extends ODataParserBase<any> {

    protected parseImpl(r: Response, resolve: (value: any) => void): void {
        r.json().then(resolve);
    }
}

export let ODataRaw = new ODataRawParserImpl();

export class TextFileParser extends ODataParserBase<string> {

    protected parseImpl(r: Response, resolve: (value: any) => void): void {
        r.text().then(resolve);
    }
}

export class BlobFileParser extends ODataParserBase<Blob> {

    protected parseImpl(r: Response, resolve: (value: any) => void): void {
        r.blob().then(resolve);
    }
}

export class JSONFileParser extends ODataParserBase<any> {

    protected parseImpl(r: Response, resolve: (value: any) => void): void {
        r.json().then(resolve);
    }
}

export class BufferFileParser extends ODataParserBase<ArrayBuffer> {

    protected parseImpl(r: Response, resolve: (value: any) => void): void {

        if (Util.isFunction(r.arrayBuffer)) {
            r.arrayBuffer().then(resolve);
        }

        (<any>r).buffer().then(resolve);
    }
}
