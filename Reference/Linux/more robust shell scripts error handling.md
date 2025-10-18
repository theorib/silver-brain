---
tags:
  - bash
  - shell-scripts
  - troubleshooting
---
# Good practice for more robust shell script error handling

source: [Cloud-Init: The Good Parts](https://www.hashicorp.com/en/resources/cloudinit-the-good-parts)

```bash
#!/bin/bash

set -e # Exits immediately if any command returns a non-zero status
set -o pipefail # Makes pipelines fail if ANY command in the pipeline fails
set -o nounset # Treats unset variables as errors

# or use the shorthand syntax to apply all of them:
# set -euo pipefail
```

Run the `shellcheck` on your scripts
```bash
shellcheck script.sh
```
