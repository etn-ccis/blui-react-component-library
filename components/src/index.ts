/**
 Copyright (c) 2021-present, Eaton

 All rights reserved.

 This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
 **/
/* eslint-disable */
declare global {
    namespace React {
        interface DOMAttributes<T> {
            placeholder?: string | undefined;
            onPointerEnterCapture?: string | undefined;
            onPointerLeaveCapture?: string | undefined;
        }
    }
}
export * from './core';
