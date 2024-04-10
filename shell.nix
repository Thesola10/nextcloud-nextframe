{ pkgs ? import <nixpkgs> {} }:

# SPDX-FileCopyrightText: Karim Vergnes <me@thesola.io>
# SPDX-License-Identifier: AGPL-3.0-or-later

pkgs.mkShell {
  name = "nextcloud";
  nativeBuildInputs = with pkgs;
    [ nodejs_20
      php83
      php83Packages.composer
    ];
}
