<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="/">
                <table id="plannerTable" class="indent">
                    <thead>
                        <tr>
                            <th colspan="8">Holiday Planner</th>
                        </tr>
                        <tr>
                            <th>Select</th>
                            <th>country</th>
                            <th>whyGo</th>
			    <th>wheretoGo</th>
		            <th>whentoGo</th>
	                    <th>timeinDays</th>
		            <th>levelofDifficulty</th>
                            <th>entraceFees</th>
                        </tr>
                    </thead>
                    <tbody>
                        <xsl:for-each select="/holidayplanner/section">
                            <tr>
                                <td colspan="8">
                                    <xsl:value-of select="@name" />
                                </td>
                            </tr>
                            
                            <xsl:for-each select="entree">
                                <tr id="{position()}">
                                    <xsl:attribute name="city">
                                        <xsl:value-of select="boolean(./@city)" />
                                    </xsl:attribute>
                                    <td align="center">
                                        <input name="country0" type="checkbox" />
                                    </td>
                                    <td>
                                        <xsl:value-of select="country" />
                                    </td>
                                    <td align="right">
                                        <xsl:value-of select="whyGo" />
                                    </td>
									<td align="right">
                                        <xsl:value-of select="wheretoGo" />
                                    </td>
									<td align="right">
                                        <xsl:value-of select="whentoGo" />
                                    </td>
									<td align="right">
                                        <xsl:value-of select="timeinDays" />
                                    </td>
									<td align="right">
                                        <xsl:value-of select="levelofDifficulty" />
                                    </td>
                                                                        <td align="right">
                                        <xsl:value-of select="entraceFees" />
                                    </td>
                                </tr>
                            </xsl:for-each>
                        </xsl:for-each>
                    </tbody>
                </table>
    </xsl:template>
</xsl:stylesheet>