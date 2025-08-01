# scratch-app 

This is a simple desktop version of [scratch-gui](https://github.com/scratchfoundation/scratch-gui) which build with [Tauri](https://tauri.studio/).

It support windows (x86, x64, arm64), linux (amd64, i386, arm64, armhf), macos (x64, aarch64, universal) and android (apk, aab in universal). One single portable executable file or bundles/installers (msi/nsis for windows, deb/AppImage/rpm for linux, dmg for macos) are provided.

[![build](https://github.com/liudonghua123/scratch-app/actions/workflows/build.yml/badge.svg)](https://github.com/liudonghua123/scratch-app/actions/workflows/build.yml)

## Downloads

Current version: 5.1.95.

<table class="is-fullwidth">
</thead>
<tbody>
</tbody>
  <tr>
    <td align="center">
      <img src="./.github/images/windows.png" width="24"><br />
      Windows
    </td>
    <td>
      <span>64-bit</span>
      <a href="https://github.com/liudonghua123/scratch-app/releases/latest/download/scratch-app-windows-5.1.95_x64.exe">
        📦 Executable
      </a> |
      <a href="https://github.com/liudonghua123/scratch-app/releases/latest/download/scratch-app-windows-5.1.95_x64.msi">
        💿 MSI Installer
      </a> |
      <a href="https://github.com/liudonghua123/scratch-app/releases/latest/download/scratch-app-windows-5.1.95_x64-setup.exe">
        💿 NSIS Installer
      </a><br />
      <span>32-bit</span>
      <a href="https://github.com/liudonghua123/scratch-app/releases/latest/download/scratch-app-windows-5.1.95_x86.exe">
        📦 Executable
      </a> |
      <a href="https://github.com/liudonghua123/scratch-app/releases/latest/download/scratch-app-windows-5.1.95_x86.msi">
        💿 MSI Installer
      </a> |
      <a href="https://github.com/liudonghua123/scratch-app/releases/latest/download/scratch-app-windows-5.1.95_x86-setup.exe">
        💿 NSIS Installer
      </a><br />
      <span>arm64</span>
      <a href="https://github.com/liudonghua123/scratch-app/releases/latest/download/scratch-app-windows-5.1.95_arm64.exe">
        📦 Executable
      </a> |
      <a href="https://github.com/liudonghua123/scratch-app/releases/latest/download/scratch-app-windows-5.1.95_arm64_en-US.msi
">
        💿 MSI Installer
      </a> |
      <a href="https://github.com/liudonghua123/scratch-app/releases/latest/download/scratch-app-windows-5.1.95_arm64-setup.exe">
        💿 NSIS Installer
      </a><br />
      <span>
        ❓ Don't know which architecture of OS you installed? Execute <code>wmic os get osarchitecture</code> or Open System by clicking the Start button, right-clicking Computer, and then clicking Properties.
      </span>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="./.github/images/macos.png" width="24"><br />
      macOS
    </td>
    <td>
      <span>Intel Processor</span>
      <a href="https://github.com/liudonghua123/scratch-app/releases/latest/download/scratch-app-macos-5.1.95_x64">
        📦 Executable
      </a> |
      <a href="https://github.com/liudonghua123/scratch-app/releases/latest/download/scratch-app-macos-5.1.95_x64.dmg">
        💿 DMG bundle
      </a><br />
      <span>Apple M1 Processor</span>
      <a href="https://github.com/liudonghua123/scratch-app/releases/latest/download/scratch-app-macos-5.1.95_aarch64">
        📦 Executable
      </a> |
      <a href="https://github.com/liudonghua123/scratch-app/releases/latest/download/scratch-app-macos-5.1.95_aarch64.dmg">
        💿 DMG bundle
      </a><br />
      <span><a href="https://developer.apple.com/documentation/apple-silicon/building-a-universal-macos-binary">Universal</a></span>
      <a href="https://github.com/liudonghua123/scratch-app/releases/latest/download/scratch-app-macos-5.1.95_universal">
        📦 Executable
      </a> |
      <a href="https://github.com/liudonghua123/scratch-app/releases/latest/download/scratch-app-macos-5.1.95_universal.dmg">
        💿 DMG bundle
      </a><br />
      <span>
        ❓ Don't know which architecture of OS you installed? Learn more at <a href="https://support.apple.com/en-us/HT211814">apple.com</a>.
      </span><br />
      <br />
      <i>
      While Apple silicon machines can run applications compiled for Intel-based Macs through a translation layer called <a href="https://support.apple.com/en-gb/HT211861">Rosetta</a>, this leads to a reduction in performance due to processor instruction translations. It is common practice to let the user choose the correct target when downloading the app, but you can also choose to distribute a <a href="https://developer.apple.com/documentation/apple-silicon/building-a-universal-macos-binary">Universal Binary</a>. Universal Binaries include both <b>aarch64</b> and <b>x86_64</b> executables, giving you the best experience on both architectures. Note, however, that this increases your bundle size significantly.
      </i>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="./.github/images/linux.png" width="24"><br />
      Linux
    </td>
    <td>
      <span>64-bit</span>
      <a href="https://github.com/liudonghua123/scratch-app/releases/latest/download/scratch-app-linux-5.1.95_amd64">
        📦 Executable
      </a> |
      <a href="https://github.com/liudonghua123/scratch-app/releases/latest/download/scratch-app-linux-5.1.95_amd64.AppImage">
        💿 AppImage bundle
      </a> |
      <a href="https://github.com/liudonghua123/scratch-app/releases/latest/download/scratch-app-linux-5.1.95_amd64.deb">
        💿 DEB bundle
      </a> |
      <a href="https://github.com/liudonghua123/scratch-app/releases/latest/download/scratch-app-linux-5.1.95.x86_64.rpm">
        💿 RPM bundle
      </a><br />
      <span>32-bit</span>
      <a href="https://github.com/liudonghua123/scratch-app/releases/latest/download/scratch-app-linux-5.1.95_i386">
        📦 Executable
      </a> |
      <a href="https://github.com/liudonghua123/scratch-app/releases/latest/download/scratch-app-linux-5.1.95_i386.AppImage">
        💿 AppImage bundle
      </a> |
      <a href="https://github.com/liudonghua123/scratch-app/releases/latest/download/scratch-app-linux-5.1.95_i386.deb">
        💿 DEB bundle
      </a> |
      <a href="https://github.com/liudonghua123/scratch-app/releases/latest/download/scratch-app-linux-5.1.95.i386.rpm">
        💿 RPM bundle
      </a><br />
      <span>arm64</span>
      <a href="https://github.com/liudonghua123/scratch-app/releases/latest/download/scratch-app-linux-5.1.95_arm64">
        📦 Executable
      </a> |
      <a href="https://github.com/liudonghua123/scratch-app/releases/latest/download/scratch-app-linux-5.1.95_arm64.deb">
        💿 DEB bundle
      </a> |
      <a href="https://github.com/liudonghua123/scratch-app/releases/latest/download/scratch-app-linux-5.1.95.aarch64.rpm">
        💿 RPM bundle
      </a><br />
      <span>armv7</span>
      <a href="https://github.com/liudonghua123/scratch-app/releases/latest/download/scratch-app-linux-5.1.95_armhf">
        📦 Executable
      </a> |
      <a href="https://github.com/liudonghua123/scratch-app/releases/latest/download/scratch-app-linux-5.1.95_armhf.deb">
        💿 DEB bundle
      </a> |
      <a href="https://github.com/liudonghua123/scratch-app/releases/latest/download/scratch-app-linux-5.1.95.armhfp.rpm">
        💿 RPM bundle
      </a><br />
      <span>
        ❓ Don't know which architecture of OS you installed? Execute <code>uname -i</code> or <code>dpkg --print-architecture</code> or <a href="https://www.man7.org/linux/man-pages/man1/arch.1.html">arch</a> command.
      </span>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="./.github/images/android.png" width="24"><br />
      Android
    </td>
    <td>
      <span>universal</span>
      <a href="https://github.com/liudonghua123/scratch-app/releases/latest/download/scratch-app-android-5.1.95-universal-release-unsigned.apk">
        📦 APK
      </a> |
      <a href="https://github.com/liudonghua123/scratch-app/releases/latest/download/scratch-app-android-5.1.95-universal-release.aab">
        💿 AAB bundle
      </a><br />
      <span>By default the generated AAB and APK is universal, containing all supported targets.</span>
    </td>
  </tr>
</table>

<hr />

![Screenshot](./.github/images/preview.png)

## Does it work?

Yes! Quite well, actually - on macOS, Windows, and Linux.

## Credits

99% of the work was done over at [scratch-gui](https://github.com/scratchfoundation/scratch-gui).

## License

MIT License

Copyright (c) 2023 liudonghua
