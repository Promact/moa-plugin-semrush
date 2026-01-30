@promactinfo/moa-plugin-semrush
=================

MoA plugin for SemRush


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@promactinfo/moa-plugin-semrush.svg)](https://www.npmjs.com/package/@promactinfo/moa-plugin-semrush)
[![Downloads/week](https://img.shields.io/npm/dw/@promactinfo/moa-plugin-semrush.svg)](https://www.npmjs.com/package/@promactinfo/moa-plugin-semrush)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @promactinfo/moa-plugin-semrush
$ semrush COMMAND
running command...
$ semrush (--version)
@promactinfo/moa-plugin-semrush/0.1.0 win32-x64 node-v22.21.1
$ semrush --help [COMMAND]
USAGE
  $ semrush COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
- [moa-plugin-semrush](#moa-plugin-semrush)
- [Usage](#usage)
- [Commands](#commands)
  - [`semrush hello PERSON`](#semrush-hello-person)
  - [`semrush hello world`](#semrush-hello-world)
  - [`semrush help [COMMAND]`](#semrush-help-command)
  - [`semrush plugins`](#semrush-plugins)
  - [`semrush plugins add PLUGIN`](#semrush-plugins-add-plugin)
  - [`semrush plugins:inspect PLUGIN...`](#semrush-pluginsinspect-plugin)
  - [`semrush plugins install PLUGIN`](#semrush-plugins-install-plugin)
  - [`semrush plugins link PATH`](#semrush-plugins-link-path)
  - [`semrush plugins remove [PLUGIN]`](#semrush-plugins-remove-plugin)
  - [`semrush plugins reset`](#semrush-plugins-reset)
  - [`semrush plugins uninstall [PLUGIN]`](#semrush-plugins-uninstall-plugin)
  - [`semrush plugins unlink [PLUGIN]`](#semrush-plugins-unlink-plugin)
  - [`semrush plugins update`](#semrush-plugins-update)
  - [`semrush semrush auth`](#semrush-semrush-auth)
  - [`semrush semrush domain-overview DOMAIN`](#semrush-semrush-domain-overview-domain)

## `semrush hello PERSON`

Say hello

```
USAGE
  $ semrush hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ semrush hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/Promact/moa-plugin-semrush/blob/v0.1.0/src/commands/hello/index.ts)_

## `semrush hello world`

Say hello world

```
USAGE
  $ semrush hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ semrush hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/Promact/moa-plugin-semrush/blob/v0.1.0/src/commands/hello/world.ts)_

## `semrush help [COMMAND]`

Display help for semrush.

```
USAGE
  $ semrush help [COMMAND...] [-n]

ARGUMENTS
  [COMMAND...]  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for semrush.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.37/src/commands/help.ts)_

## `semrush plugins`

List installed plugins.

```
USAGE
  $ semrush plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ semrush plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.55/src/commands/plugins/index.ts)_

## `semrush plugins add PLUGIN`

Installs a plugin into semrush.

```
USAGE
  $ semrush plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into semrush.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the SEMRUSH_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the SEMRUSH_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ semrush plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ semrush plugins add myplugin

  Install a plugin from a github url.

    $ semrush plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ semrush plugins add someuser/someplugin
```

## `semrush plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ semrush plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ semrush plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.55/src/commands/plugins/inspect.ts)_

## `semrush plugins install PLUGIN`

Installs a plugin into semrush.

```
USAGE
  $ semrush plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into semrush.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the SEMRUSH_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the SEMRUSH_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ semrush plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ semrush plugins install myplugin

  Install a plugin from a github url.

    $ semrush plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ semrush plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.55/src/commands/plugins/install.ts)_

## `semrush plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ semrush plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ semrush plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.55/src/commands/plugins/link.ts)_

## `semrush plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ semrush plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  [PLUGIN...]  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ semrush plugins unlink
  $ semrush plugins remove

EXAMPLES
  $ semrush plugins remove myplugin
```

## `semrush plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ semrush plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.55/src/commands/plugins/reset.ts)_

## `semrush plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ semrush plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  [PLUGIN...]  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ semrush plugins unlink
  $ semrush plugins remove

EXAMPLES
  $ semrush plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.55/src/commands/plugins/uninstall.ts)_

## `semrush plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ semrush plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  [PLUGIN...]  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ semrush plugins unlink
  $ semrush plugins remove

EXAMPLES
  $ semrush plugins unlink myplugin
```

## `semrush plugins update`

Update installed plugins.

```
USAGE
  $ semrush plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.55/src/commands/plugins/update.ts)_

## `semrush semrush auth`

Authenticate with Semrush

```
USAGE
  $ semrush semrush auth

DESCRIPTION
  Authenticate with Semrush

EXAMPLES
  $ semrush semrush auth
```

_See code: [src/commands/semrush/auth.ts](https://github.com/Promact/moa-plugin-semrush/blob/v0.1.0/src/commands/semrush/auth.ts)_

## `semrush semrush domain-overview DOMAIN`

Get Domain Overview from Semrush

```
USAGE
  $ semrush semrush domain-overview DOMAIN [-d <value>]

ARGUMENTS
  DOMAIN  Domain name to analyze

FLAGS
  -d, --database=<value>  [default: us] Semrush Database (us, uk, fr, etc.)

DESCRIPTION
  Get Domain Overview from Semrush

EXAMPLES
  $ semrush semrush domain-overview example.com --database=us
```

_See code: [src/commands/semrush/domain-overview.ts](https://github.com/Promact/moa-plugin-semrush/blob/v0.1.0/src/commands/semrush/domain-overview.ts)_
<!-- commandsstop -->
