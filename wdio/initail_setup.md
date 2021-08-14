# Initial setup 

```
-> % npx wdio wdio                                         
npx: 17個のパッケージを1.697秒でインストールしました。

                 -:...........................-:.
                 +                              +
              `` +      `...`        `...`      + `
            ./+/ +    .:://:::`    `::///::`  ` + ++/.
           .+oo+ +    /:+ooo+-/    /-+ooo+-/ ./ + +oo+.
           -ooo+ +    /-+ooo+-/    /-+ooo+-/ .: + +ooo.
            -+o+ +    `::///:-`    `::///::`    + +o+-
             ``. /.     `````        `````     .: .``
                  .----------------------------.
           `-::::::::::::::::::::::::::::::::::::::::-`
          .+oooo/:------------------------------:/oooo+.
      `.--/oooo-                                  :oooo/--.`
    .::-``:oooo`                                  .oooo-``-::.
  ./-`    -oooo`--.: :.--                         .oooo-    `-/.
 -/`    `-/oooo////////////////////////////////////oooo/.`    `/-
`+`   `/+oooooooooooooooooooooooooooooooooooooooooooooooo+:`   .+`
-/    +o/.:oooooooooooooooooooooooooooooooooooooooooooo:-/o/    +.
-/   .o+  -oooosoooososssssooooo------------------:oooo- `oo`   +.
-/   .o+  -oooodooohyyssosshoooo`                 .oooo-  oo.   +.
-/   .o+  -oooodooysdooooooyyooo` `.--.``     .:::-oooo-  oo.   +.
-/   .o+  -oooodoyyodsoooooyyooo.//-..-:/:.`.//.`./oooo-  oo.   +.
-/   .o+  -oooohsyoooyysssysoooo+-`     `-:::.    .oooo-  oo.   +.
-/   .o+  -ooooosooooooosooooooo+//////////////////oooo-  oo.   +.
-/   .o+  -oooooooooooooooooooooooooooooooooooooooooooo-  oo.   +.
-/   .o+  -oooooooooooooooooooooooooooooooooooooooooooo-  oo.   +.
-+////o+` -oooo---:///:----://::------------------:oooo- `oo////+-
+ooooooo/`-oooo``:-```.:`.:.`.+/-    .::::::::::` .oooo-`+ooooooo+
oooooooo+`-oooo`-- `/` .:+  -/-`/`   .::::::::::  .oooo-.+oooooooo
+-/+://-/ -oooo-`:`.o-`:.:-````.:    .///:``````  -oooo-`/-//:+:-+
: :..--:-:.+ooo+/://o+/-.-:////:-....-::::-....--/+ooo+.:.:--.-- /
- /./`-:-` .:///+/ooooo/+///////////////+++ooooo/+///:. .-:.`+./ :
:-:/.           :`ooooo`/`              .:.ooooo :           ./---
                :`ooooo`/`              .:.ooooo :
                :`ooooo./`              .:-ooooo :
                :`ooooo./`              .:-ooooo :
            `...:-+++++:/.              ./:+++++-:...`
           :-.````````/../              /.-:````````.:-
          -/::::::::://:/+             `+/:+::::::::::+.
          :oooooooooooo++/              +++oooooooooooo-
 
                           Webdriver.IO
              Next-gen browser and mobile automation
                    test framework for Node.js


Creating WebdriverIO project in 

package.json file does not exist in current dir, creating it...
Installing packages:  @wdio/cli 

yarn add v1.22.10
info No lockfile found.
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
success Saved 227 new dependencies.
info Direct dependencies
└─ @wdio/cli@7.9.1
info All dependencies
├─ @babel/runtime-corejs3@7.15.3
├─ @babel/runtime@7.15.3
├─ @sindresorhus/is@4.0.1
├─ @szmarczak/http-timer@4.0.6
├─ @types/aria-query@4.2.2
├─ @types/cacheable-request@6.0.2
├─ @types/ejs@3.0.7
├─ @types/fs-extra@9.0.12
├─ @types/http-cache-semantics@4.0.1
├─ @types/inquirer@7.3.3
├─ @types/keyv@3.1.2
├─ @types/lodash.flattendeep@4.4.6
├─ @types/lodash.pickby@4.6.6
├─ @types/lodash.union@4.6.6
├─ @types/node@16.6.1
├─ @types/recursive-readdir@2.2.0
├─ @types/responselike@1.0.0
├─ @types/through@0.0.30
├─ @types/which@1.3.2
├─ @types/yauzl@2.9.2
├─ @wdio/cli@7.9.1
├─ @wdio/repl@7.9.1
├─ agent-base@6.0.2
├─ ansi-escapes@4.3.2
├─ ansi-styles@4.3.0
├─ anymatch@3.1.2
├─ archiver@5.3.0
├─ aria-query@4.2.2
├─ async-exit-hook@2.0.1
├─ async@0.9.2
├─ atob@2.1.2
├─ balanced-match@1.0.2
├─ base64-js@1.5.1
├─ binary-extensions@2.2.0
├─ bl@4.1.0
├─ brace-expansion@1.1.11
├─ braces@3.0.2
├─ buffer-crc32@0.2.13
├─ buffer@5.7.1
├─ cac@3.0.4
├─ cacheable-lookup@5.0.4
├─ cacheable-request@7.0.2
├─ camelcase-keys@3.0.0
├─ camelcase@3.0.0
├─ chardet@0.7.0
├─ chokidar@3.5.2
├─ chownr@1.1.4
├─ chrome-launcher@0.14.0
├─ cli-spinners@2.6.0
├─ cli-width@3.0.0
├─ cliui@7.0.4
├─ clone-response@1.0.2
├─ clone@1.0.4
├─ color-convert@2.0.1
├─ color-name@1.1.4
├─ compress-commons@4.1.1
├─ concat-map@0.0.1
├─ core-js-pure@3.16.1
├─ core-util-is@1.0.2
├─ crc-32@1.2.0
├─ crc32-stream@4.0.2
├─ cross-spawn@4.0.2
├─ css-shorthand-properties@1.1.1
├─ css-value@0.0.1
├─ decompress-response@6.0.0
├─ deepmerge@4.2.2
├─ defaults@1.0.3
├─ defer-to-connect@2.0.1
├─ devtools-protocol@0.0.906795
├─ devtools@7.9.1
├─ edge-paths@2.2.1
├─ ejs@3.1.6
├─ emoji-regex@8.0.0
├─ end-of-stream@1.4.4
├─ error-ex@1.3.2
├─ escalade@3.1.1
├─ exit-on-epipe@1.0.1
├─ external-editor@3.1.0
├─ extract-zip@2.0.1
├─ fast-deep-equal@2.0.1
├─ fd-slicer@1.1.0
├─ figures@3.2.0
├─ filelist@1.0.2
├─ fill-range@7.0.1
├─ find-up@1.1.2
├─ fs-constants@1.0.0
├─ fs.realpath@1.0.0
├─ fsevents@2.3.2
├─ function-bind@1.1.1
├─ get-caller-file@2.0.5
├─ get-port@5.1.1
├─ glob-parent@5.1.2
├─ glob@7.1.7
├─ got@11.8.2
├─ grapheme-splitter@1.0.4
├─ has-ansi@2.0.0
├─ has-flag@4.0.0
├─ has@1.0.3
├─ hosted-git-info@2.8.9
├─ http-cache-semantics@4.1.0
├─ http2-wrapper@1.0.3
├─ https-proxy-agent@5.0.0
├─ iconv-lite@0.4.24
├─ ieee754@1.2.1
├─ indent-string@3.2.0
├─ inflight@1.0.6
├─ inquirer@8.1.2
├─ is-arrayish@0.2.1
├─ is-binary-path@2.1.0
├─ is-core-module@2.5.0
├─ is-docker@2.2.1
├─ is-extglob@2.1.1
├─ is-fullwidth-code-point@3.0.0
├─ is-glob@4.0.1
├─ is-interactive@1.0.0
├─ is-number@7.0.0
├─ is-utf8@0.2.1
├─ is-wsl@2.2.0
├─ isarray@1.0.0
├─ jake@10.8.2
├─ json-buffer@3.0.1
├─ jsonfile@6.1.0
├─ keyv@4.0.3
├─ ky@0.28.5
├─ lazystream@1.0.0
├─ lighthouse-logger@1.3.0
├─ load-json-file@1.1.0
├─ locate-path@5.0.0
├─ lodash.clonedeep@4.5.0
├─ lodash.defaults@4.2.0
├─ lodash.difference@4.5.0
├─ lodash.flatten@4.4.0
├─ lodash.flattendeep@4.4.0
├─ lodash.isobject@3.0.2
├─ lodash.merge@4.6.2
├─ lodash.pickby@4.6.0
├─ lodash.zip@4.2.0
├─ lodash@4.17.21
├─ log-symbols@4.1.0
├─ loglevel-plugin-prefix@0.8.4
├─ loglevel@1.7.1
├─ lru-cache@4.1.5
├─ map-obj@1.0.1
├─ marky@1.2.2
├─ mimic-fn@2.1.0
├─ mimic-response@3.1.0
├─ minimist@1.2.5
├─ mkdirp@1.0.4
├─ mute-stream@0.0.8
├─ node-fetch@2.6.1
├─ normalize-package-data@2.5.0
├─ normalize-url@6.1.0
├─ once@1.4.0
├─ onetime@5.1.2
├─ ora@5.4.1
├─ os-tmpdir@1.0.2
├─ p-cancelable@2.1.1
├─ p-iteration@1.1.8
├─ p-limit@2.3.0
├─ p-locate@4.1.0
├─ p-try@2.2.0
├─ parse-json@2.2.0
├─ path-exists@2.1.0
├─ path-is-absolute@1.0.1
├─ path-parse@1.0.7
├─ path-type@1.1.0
├─ pend@1.2.0
├─ picomatch@2.3.0
├─ pinkie@2.0.4
├─ pkg-dir@4.2.0
├─ printj@1.1.2
├─ process-nextick-args@2.0.1
├─ progress@2.0.1
├─ proxy-from-env@1.1.0
├─ pseudomap@1.0.2
├─ quick-lru@5.1.1
├─ read-pkg-up@1.0.1
├─ read-pkg@1.1.0
├─ readdir-glob@1.1.1
├─ readdirp@3.6.0
├─ recursive-readdir@2.2.2
├─ require-directory@2.1.1
├─ resolve-alpn@1.2.0
├─ resolve@1.20.0
├─ resq@1.10.1
├─ restore-cursor@3.1.0
├─ rgb2hex@0.2.5
├─ rimraf@3.0.2
├─ run-async@2.4.1
├─ rxjs@6.6.7
├─ safe-buffer@5.1.2
├─ safer-buffer@2.1.2
├─ semver@5.7.1
├─ serialize-error@8.1.0
├─ signal-exit@3.0.3
├─ spdx-correct@3.1.1
├─ spdx-exceptions@2.3.0
├─ string_decoder@1.3.0
├─ strip-bom@2.0.0
├─ suffix@0.1.1
├─ supports-color@7.2.0
├─ tar-fs@2.0.0
├─ tar-stream@2.2.0
├─ text-table@0.2.0
├─ through@2.3.8
├─ tmp@0.0.33
├─ to-regex-range@5.0.1
├─ tslib@1.14.1
├─ type-fest@0.20.2
├─ ua-parser-js@0.7.28
├─ unbzip2-stream@1.3.3
├─ util-deprecate@1.0.2
├─ uuid@8.3.2
├─ validate-npm-package-license@3.0.4
├─ wcwidth@1.0.1
├─ webdriver@7.9.1
├─ webdriverio@7.9.1
├─ which@1.3.1
├─ wrap-ansi@7.0.0
├─ ws@7.4.6
├─ y18n@5.0.8
├─ yallist@2.1.2
├─ yargs-parser@20.2.9
├─ yargs@17.1.1
├─ yarn-install@1.0.0
├─ yauzl@2.10.0
└─ zip-stream@4.1.0
✨  Done in 6.52s.

Finished installing packages.
Running WDIO CLI Wizard...

=========================
WDIO Configuration Helper
=========================

? Where is your automation backend located? On my local machine
? Which framework do you want to use? mocha
? Do you want to use a compiler? TypeScript (https://www.typescriptlang.org/)
? Where are your test specs located? ./test/specs/**/*.ts
? Do you want WebdriverIO to autogenerate some test files? Yes
? Do you want to use page objects (https://martinfowler.com/bliki/PageObject.html)? No
? Which reporter do you want to use? spec
? Do you want to add a service to your test setup? chromedriver
? What is the base url? http://localhost

Installing wdio packages:
- @wdio/local-runner
- @wdio/mocha-framework
- @wdio/spec-reporter
- wdio-chromedriver-service
- ts-node
- typescript
- chromedriver
yarn add v1.22.10
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
warning " > ts-node@10.2.0" has unmet peer dependency "@types/node@*".
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
success Saved 106 new dependencies.
info Direct dependencies
├─ @wdio/local-runner@7.9.1
├─ @wdio/mocha-framework@7.9.1
├─ @wdio/spec-reporter@7.9.0
├─ chromedriver@92.0.1
├─ ts-node@10.2.0
├─ typescript@4.3.5
└─ wdio-chromedriver-service@7.2.0
info All dependencies
├─ @babel/code-frame@7.14.5
├─ @babel/helper-validator-identifier@7.14.9
├─ @babel/highlight@7.14.5
├─ @cspotcode/source-map-consumer@0.8.0
├─ @cspotcode/source-map-support@0.6.1
├─ @nodelib/fs.scandir@2.1.5
├─ @nodelib/fs.stat@2.0.5
├─ @nodelib/fs.walk@1.2.8
├─ @testim/chrome-version@1.0.7
├─ @tsconfig/node10@1.0.8
├─ @tsconfig/node12@1.0.9
├─ @tsconfig/node14@1.0.1
├─ @tsconfig/node16@1.0.2
├─ @types/diff@5.0.1
├─ @types/easy-table@0.0.33
├─ @types/istanbul-lib-coverage@2.0.3
├─ @types/istanbul-lib-report@3.0.0
├─ @types/istanbul-reports@3.0.1
├─ @types/mocha@9.0.0
├─ @types/object-inspect@1.8.1
├─ @types/stack-utils@2.0.1
├─ @types/stream-buffers@3.0.4
├─ @types/supports-color@8.1.1
├─ @types/yargs-parser@20.2.1
├─ @types/yargs@16.0.4
├─ @ungap/promise-all-settled@1.1.2
├─ @wdio/local-runner@7.9.1
├─ @wdio/mocha-framework@7.9.1
├─ @wdio/reporter@7.9.0
├─ @wdio/runner@7.9.1
├─ @wdio/spec-reporter@7.9.0
├─ acorn-walk@8.1.1
├─ acorn@8.4.1
├─ aggregate-error@3.1.0
├─ ansi-colors@4.1.1
├─ arg@4.1.3
├─ argparse@2.0.1
├─ array-union@2.1.0
├─ at-least-node@1.0.0
├─ axios@0.21.1
├─ browser-stdout@1.3.1
├─ camelcase@6.2.0
├─ chromedriver@92.0.1
├─ clean-stack@2.2.0
├─ create-require@1.1.1
├─ decamelize@4.0.0
├─ deep-is@0.1.3
├─ del@6.0.0
├─ diff-sequences@27.0.6
├─ diff@5.0.0
├─ dir-glob@3.0.1
├─ easy-table@1.1.1
├─ expect-webdriverio@3.1.0
├─ expect@27.0.6
├─ fast-glob@3.2.7
├─ fastq@1.11.1
├─ find-up@5.0.0
├─ flat@5.0.2
├─ follow-redirects@1.14.1
├─ gaze@1.1.3
├─ globby@11.0.4
├─ globule@1.3.2
├─ growl@1.10.5
├─ he@1.2.0
├─ ignore@5.1.8
├─ ip-regex@4.3.0
├─ is-path-cwd@2.2.0
├─ is-path-inside@3.0.3
├─ is-plain-obj@2.1.0
├─ is-url@1.2.4
├─ is2@2.0.7
├─ jest-diff@27.0.6
├─ jest-matcher-utils@27.0.6
├─ jest-message-util@27.0.6
├─ jest-regex-util@27.0.6
├─ js-tokens@4.0.0
├─ js-yaml@4.1.0
├─ locate-path@6.0.0
├─ make-error@1.3.6
├─ mocha@9.0.3
├─ nanoid@3.1.23
├─ object-inspect@1.11.0
├─ p-limit@3.1.0
├─ p-locate@5.0.0
├─ p-map@4.0.0
├─ parse-ms@2.1.0
├─ path-type@4.0.0
├─ pretty-ms@7.0.1
├─ queue-microtask@1.2.3
├─ randombytes@2.1.0
├─ react-is@17.0.2
├─ reusify@1.0.4
├─ run-parallel@1.2.0
├─ serialize-javascript@6.0.0
├─ stack-utils@2.0.3
├─ stream-buffers@3.0.2
├─ strip-json-comments@3.1.1
├─ tcp-port-used@1.0.2
├─ ts-node@10.2.0
├─ typescript@4.3.5
├─ wdio-chromedriver-service@7.2.0
├─ wide-align@1.1.3
├─ workerpool@6.1.5
├─ yargs-unparser@2.0.0
├─ yn@3.1.1
└─ yocto-queue@0.1.0
✨  Done in 12.25s.

Packages installed successfully, creating configuration file...

Config file installed successfully, creating test files...
To have TypeScript support please add the following packages to your "types" list:
{
  "compilerOptions": {
    "types": ["node", "webdriverio/async", "@wdio/mocha-framework", "expect-webdriverio"]
  }
}

For for information on TypeScript integration check out: https://webdriver.io/docs/typescript


Configuration file was created successfully!
To run your tests, execute:
$ npx wdio run wdio.conf.js

🤖 Successfully setup project at 🎉
```