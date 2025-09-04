# PNPM Environments

Tags: #javascript #node #runtime #development-environment
## Managing Environments
This allows `pnpm` to [manage node versions](https://pnpm.io/cli/env).
```bash
pnpm env use --global lts
# or
pnpm env use --global latest
# or
pnpm env use --global 16.0.0-rc.0
```
## Setting node versions for dev environment
PNPM allows us to[ set node runtime versions for the development environment](https://pnpm.io/package_json#devenginesruntime)
```json
{  
	"devEngines": {  
		"runtime": {  
			"name": "node",  
			"version": "^24.4.0",  
			"onFail": "download"  
		}  
	}  
}
```

You can also set multiple runtimes:

```json
{  
	"devEngines": {  
		"runtime": [
			{  
				"name": "node",  
				"version": "^24.4.0",  
				"onFail": "download"  
			},
			{  
				"name": "deno",  
				"version": "^2.4.3",  
				"onFail": "download"  
			}
		]
	}  
}
```

You can also specify the node version that your system [needs to be running for the project to work](https://pnpm.io/package_json#engines):
```json
{  
	"engines": {  
		"node": ">=10",  
		"pnpm": ">=3"  
	}  
}
```