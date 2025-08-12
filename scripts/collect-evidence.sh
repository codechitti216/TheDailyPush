#!/bin/bash

# Template License Violation - Evidence Collection Script
# © 2025 Surya GS Chitti
#
# This script collects evidence for DMCA takedown requests
# Usage: ./collect-evidence.sh <violating-repo-url>

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
ORIGINAL_REPO="https://github.com/codechitti216/TheDailyPush"
AUTHOR_NAME="Surya GS Chitti"
AUTHOR_EMAIL="suryachitti216@gmail.com"
TEMPLATE_NAME="Research Portfolio Template"

echo -e "${BLUE}🔍 Template License Violation Evidence Collector${NC}"
echo -e "${BLUE}Original Template: ${ORIGINAL_REPO}${NC}"
echo ""

# Check if URL provided
if [[ $# -eq 0 ]]; then
    echo -e "${RED}❌ Error: Please provide the violating repository URL${NC}"
    echo "Usage: $0 <repository-url>"
    echo "Example: $0 https://github.com/user/copied-repo"
    exit 1
fi

VIOLATING_URL="$1"
REPO_NAME=$(basename "$VIOLATING_URL" .git)
EVIDENCE_DIR="evidence_$(date +%Y%m%d_%H%M%S)_${REPO_NAME}"

echo -e "${YELLOW}🎯 Target Repository: ${VIOLATING_URL}${NC}"
echo -e "${YELLOW}📁 Evidence Directory: ${EVIDENCE_DIR}${NC}"
echo ""

# Create evidence directory
mkdir -p "$EVIDENCE_DIR"
cd "$EVIDENCE_DIR"

echo -e "${BLUE}📋 Creating violation report...${NC}"

# Create violation report
cat > "VIOLATION_REPORT.md" << EOF
# Template License Violation Report

**Generated:** $(date)
**Violating Repository:** ${VIOLATING_URL}
**Original Template:** ${ORIGINAL_REPO}
**Template Author:** ${AUTHOR_NAME}
**Contact:** ${AUTHOR_EMAIL}

## Violation Summary

This repository appears to be using the "${TEMPLATE_NAME}" without proper attribution as required by the Custom Attribution License.

## Required Attribution (Missing)

The following attribution elements are required by the license:

1. **Footer Credit:** "Template design by ${AUTHOR_NAME}"
2. **LICENSE.md:** Must contain original license with attribution requirements
3. **Meta Tag:** \`<meta name="template-author" content="${AUTHOR_NAME}" />\`
4. **Copyright Headers:** Source files must retain copyright notices
5. **Package.json:** Author field must reference original template creator

## Evidence Collection

- [ ] Screenshots of violating website
- [ ] Git history analysis
- [ ] Code similarity analysis
- [ ] Missing attribution documentation
- [ ] License file comparison

## Next Steps

1. **Contact Repository Owner** (preferred)
   - Send friendly email requesting compliance
   - Reference license terms
   - Provide 7-14 days for response

2. **DMCA Takedown** (if contact fails)
   - File with hosting provider
   - Use evidence collected here
   - Reference original copyright registration

## Legal Notes

- Original template copyright: © 2025 ${AUTHOR_NAME}
- License: Custom Attribution License
- DMCA Agent: GitHub, Inc.

EOF

echo -e "${GREEN}✅ Violation report created${NC}"

# Clone the violating repository for analysis
echo -e "${BLUE}📥 Cloning violating repository...${NC}"
if git clone "$VIOLATING_URL" "violating_repo" 2>/dev/null; then
    echo -e "${GREEN}✅ Repository cloned successfully${NC}"
    
    # Analyze the repository
    cd "violating_repo"
    
    echo -e "${BLUE}🔍 Analyzing repository structure...${NC}"
    
    # Check for required files
    echo "## File Analysis" >> "../VIOLATION_REPORT.md"
    echo "" >> "../VIOLATION_REPORT.md"
    
    if [[ ! -f "LICENSE.md" ]]; then
        echo -e "${RED}❌ LICENSE.md missing${NC}"
        echo "- ❌ LICENSE.md: **MISSING**" >> "../VIOLATION_REPORT.md"
    else
        if grep -q "${AUTHOR_NAME}" LICENSE.md; then
            echo -e "${GREEN}✅ LICENSE.md contains attribution${NC}"
            echo "- ✅ LICENSE.md: Contains attribution" >> "../VIOLATION_REPORT.md"
        else
            echo -e "${RED}❌ LICENSE.md missing proper attribution${NC}"
            echo "- ❌ LICENSE.md: Missing proper attribution" >> "../VIOLATION_REPORT.md"
        fi
    fi
    
    # Check package.json
    if [[ -f "package.json" ]]; then
        if grep -q "${AUTHOR_NAME}" package.json; then
            echo -e "${GREEN}✅ package.json contains attribution${NC}"
            echo "- ✅ package.json: Contains attribution" >> "../VIOLATION_REPORT.md"
        else
            echo -e "${RED}❌ package.json missing attribution${NC}"
            echo "- ❌ package.json: Missing attribution" >> "../VIOLATION_REPORT.md"
        fi
    fi
    
    # Check index.html for meta tag
    if [[ -f "index.html" ]]; then
        if grep -q "template-author.*${AUTHOR_NAME}" index.html; then
            echo -e "${GREEN}✅ index.html contains meta attribution${NC}"
            echo "- ✅ index.html: Contains meta attribution" >> "../VIOLATION_REPORT.md"
        else
            echo -e "${RED}❌ index.html missing meta attribution${NC}"
            echo "- ❌ index.html: Missing meta attribution" >> "../VIOLATION_REPORT.md"
        fi
    fi
    
    # Search for attribution in source files
    echo -e "${BLUE}🔍 Searching for attribution in source files...${NC}"
    ATTRIBUTION_COUNT=$(find . -type f \( -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" \) -exec grep -l "${AUTHOR_NAME}" {} \; | wc -l)
    
    echo "" >> "../VIOLATION_REPORT.md"
    echo "## Attribution Analysis" >> "../VIOLATION_REPORT.md"
    echo "- **Source files with attribution:** ${ATTRIBUTION_COUNT}" >> "../VIOLATION_REPORT.md"
    
    if [[ $ATTRIBUTION_COUNT -eq 0 ]]; then
        echo -e "${RED}❌ No attribution found in source files${NC}"
        echo "- **Status:** ❌ No attribution found in source files" >> "../VIOLATION_REPORT.md"
    else
        echo -e "${YELLOW}⚠️ Partial attribution found (${ATTRIBUTION_COUNT} files)${NC}"
        echo "- **Status:** ⚠️ Partial attribution found" >> "../VIOLATION_REPORT.md"
    fi
    
    # Collect git information
    echo -e "${BLUE}📊 Collecting git history...${NC}"
    git log --oneline --no-merges > "../git_history.txt"
    git log --format="%H %an %ae %ad %s" > "../git_detailed.txt"
    
    # Check for original commits
    if git log --author="${AUTHOR_EMAIL}" --oneline | head -5 > "../original_commits.txt"; then
        ORIGINAL_COMMITS=$(wc -l < "../original_commits.txt")
        if [[ $ORIGINAL_COMMITS -gt 0 ]]; then
            echo -e "${YELLOW}⚠️ Found ${ORIGINAL_COMMITS} commits by original author${NC}"
            echo "- **Original author commits:** ${ORIGINAL_COMMITS} (possible fork/copy)" >> "../VIOLATION_REPORT.md"
        fi
    fi
    
    cd ..
    echo -e "${GREEN}✅ Repository analysis complete${NC}"
else
    echo -e "${RED}❌ Failed to clone repository (may be private)${NC}"
    echo "- **Repository access:** ❌ Clone failed (private or deleted)" >> "VIOLATION_REPORT.md"
fi

# Create timestamp file
echo "Evidence collected: $(date)" > "collection_timestamp.txt"
echo "Collector: Template License Enforcement" >> "collection_timestamp.txt"
echo "Original repository: ${ORIGINAL_REPO}" >> "collection_timestamp.txt"

# Create DMCA template
echo -e "${BLUE}📝 Generating DMCA takedown notice template...${NC}"

cat > "DMCA_NOTICE_TEMPLATE.md" << EOF
# DMCA Takedown Notice

**To:** GitHub Legal Team (copyright@github.com)
**From:** ${AUTHOR_NAME} <${AUTHOR_EMAIL}>
**Date:** $(date)
**Subject:** DMCA Takedown Request - Copyright Infringement

## Identification of Copyrighted Work

I am the copyright owner of the "${TEMPLATE_NAME}" originally published at:
${ORIGINAL_REPO}

**Copyright Information:**
- Work: Research Portfolio Template
- Author: ${AUTHOR_NAME}
- Copyright Date: 2025
- License: Custom Attribution License

## Identification of Infringing Material

The following repository contains infringing material:
**Repository:** ${VIOLATING_URL}

**Specific Violations:**
- Removal of required footer attribution
- Modification or removal of LICENSE.md
- Removal of copyright notices from source files
- Use without compliance to attribution requirements

## Evidence of Infringement

Evidence has been collected and is available upon request, including:
- Code similarity analysis
- Missing attribution documentation
- Original git history comparison
- License violation screenshots

## Good Faith Statement

I have a good faith belief that use of the copyrighted materials described above on the infringing web pages is not authorized by the copyright owner, or its agent, or the law.

## Accuracy Statement

I swear, under penalty of perjury, that the information in this notification is accurate and that I am the copyright owner, or am authorized to act on behalf of the owner, of an exclusive right that is allegedly infringed.

## Contact Information

**${AUTHOR_NAME}**
Email: ${AUTHOR_EMAIL}
GitHub: @codechitti216

## Request

I request that you remove or disable access to the infringing material as soon as possible.

Thank you for your prompt attention to this matter.

Sincerely,
${AUTHOR_NAME}
EOF

echo -e "${GREEN}✅ DMCA notice template created${NC}"

# Create summary
echo -e "${BLUE}📊 Creating evidence summary...${NC}"

cat > "EVIDENCE_SUMMARY.txt" << EOF
TEMPLATE LICENSE VIOLATION EVIDENCE SUMMARY
===========================================

Collection Date: $(date)
Violating Repository: ${VIOLATING_URL}
Original Template: ${ORIGINAL_REPO}
Evidence Collector: ${AUTHOR_NAME}

FILES CREATED:
- VIOLATION_REPORT.md (detailed analysis)
- DMCA_NOTICE_TEMPLATE.md (ready-to-send takedown)
- git_history.txt (commit history)
- git_detailed.txt (detailed git log)
- original_commits.txt (commits by original author)
- collection_timestamp.txt (evidence collection metadata)

NEXT STEPS:
1. Review VIOLATION_REPORT.md for analysis
2. Optionally contact repository owner first
3. If needed, customize and send DMCA_NOTICE_TEMPLATE.md
4. Archive this evidence directory for legal records

CONTACT:
${AUTHOR_NAME} <${AUTHOR_EMAIL}>
Original Repository: ${ORIGINAL_REPO}
EOF

echo ""
echo -e "${GREEN}🎉 Evidence collection complete!${NC}"
echo -e "${YELLOW}📁 Evidence stored in: ${EVIDENCE_DIR}/${NC}"
echo ""
echo -e "${BLUE}📋 Next Steps:${NC}"
echo "1. Review ${EVIDENCE_DIR}/VIOLATION_REPORT.md"
echo "2. Consider contacting repository owner first (friendly approach)"
echo "3. If needed, use ${EVIDENCE_DIR}/DMCA_NOTICE_TEMPLATE.md for takedown"
echo "4. Archive evidence directory for records"
echo ""
echo -e "${YELLOW}⚖️ This evidence can be used for DMCA takedown requests if needed.${NC}"
