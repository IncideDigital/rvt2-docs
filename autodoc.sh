#!/bin/bash

TARGET=$(pwd)/docs

[[ -z "$RVT2_HOME" ]] && ( echo 'RVT2_HOME must be defined'; exit 1)


function autodoc_plugin {
    (
    # Create the documentation for a plugin and copy the directory imgs, if exists
    PLUGIN=$1
    echo "Documenting plugin $PLUGIN"
    rm -rf "$TARGET/rvt2/$PLUGIN.md"
    cd "$RVT2_HOME"
    "./rvt2" --globals rvthome=. --morgue MORGUE --client CLIENT --casename CASENAME --source SOURCE -j help $PLUGIN --params show_vars="" template_file="templates/help_section_complete.mako" outfile="$TARGET/rvt2/$PLUGIN.md"
    cat >> "$TARGET/rvt2/$PLUGIN.md" << EOF

:::warning
This chapter was created automatically using \`autodoc.sh\`. Do not modify manually this file.
:::

EOF
    [ -d "$RVT2_HOME/plugins/$PLUGIN/imgs" ] && cp -r "$RVT2_HOME/plugins/$PLUGIN/imgs" "$TARGET/rvt2/imgs/."
    return 0
    )
}

autodoc_plugin windows
autodoc_plugin common
autodoc_plugin indexer
autodoc_plugin ios
autodoc_plugin linux
autodoc_plugin macos
