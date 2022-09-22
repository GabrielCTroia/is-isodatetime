# is-isodatetime

A Type Validator for ISO Date & Datetime

# Usage

### Validate

```
import { isValidISODateTime } from "is-isodatetime";

isValidISODateTime('2022-09-14T10:22:30.370Z'); // true
isValidISODateTime('asdasd'); // false

```

### Transform

```
import { toISODateTime } from "is-isodatetime";



toISODateTime('2022-09-14T10:22:30.370Z'); // '2022-09-14T10:22:30.370Z'

const now = new Date();
isValidISODateTime(now); // '2022-09-14T10:22:30.370Z'

```

### With Zod

```
import { z } from "zod";
import { isValidISODateTime } from "is-isodatetime";

export const isoDatetimeToDate = z
  .string()
  .refine(isValidISODateTime)
  .transform((s) => new Date(s));
```